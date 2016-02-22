function recuperarNoticias() {
    var seleccion = frmPrincipal.lstSecciones.selectedKey;
    if (kony.string.equalsIgnoreCase(seleccion, "vacio")) {
        frmPrincipal.lblNotificacion.text = "La categoria no puede ser vacia.!";
    } else {
        frmPrincipal.lblNotificacion.text = "La categoria : " + seleccion;
        var inputParams = {
            serviceID: "FoxNews",
            newsType: seleccion
        };
        appmiddlewareinvokerasync(inputParams, procesarResulado);
    }
}

function procesarResulado(estado, responseFoxNews) {
    //Verificar estado
    kony.print("N0rf3n Estado ==> " + JSON.stringify(estado));
    kony.print("N0rf3n Response ==> " + JSON.stringify(responseFoxNews));
    kony.print("N0rf3n Noticias ==> " + JSON.stringify(responseFoxNews.articles));
    if (estado == 400) {
        if (responseFoxNews.opstatus == 0 && responseFoxNews != null) {
            if (responseFoxNews.articulo != null) {
                if (responseFoxNews.articulo.length > 0) {
                    frmPrincipal.segNoticias.widgetDataMap = {
                        lblNoticia: "titulo",
                        hidDescripcion: "descripcion",
                        hidFecha: "fecha"
                    };
                    frmPrincipal.segNoticias.setVisibility(true);
                    frmPrincipal.segNoticias.setData(responseFoxNews.articulo);
                    kony.print("N0rf3n Noticias ==> " + JSON.stringify(responseFoxNews.articulo));
                }
            }
        }
    } else {
        frmPrincipal.lblNotificacion.text = "Sin Servicio.! Estado =>" + responseFoxNews.opstatus;
    }
}

function displayDetails() {
    //Captura la posicion del arreglo seleccionado
    var selectedIndex = frmPrincipal.segNoticias.selectedIndex;
    //Captura la informacion que contiene la posicion del arreglo seleccionado.
    var selectedItems = frmPrincipal.segNoticias.selectedItems;
    //Imprime la posicion del arreglo seleccionado
    kony.print("####### N0rf3n Index ==> " + JSON.stringify(selectedIndex));
    //Imprime la informacion que contiene la posicion del arreglo seleccionado.
    kony.print("####### N0rf3n Items ==> " + JSON.stringify(selectedItems));
    //Capturar la información del arreglo seleccionado.
    var titulo = frmPrincipal["segNoticias"]["selectedItems"][0]["titulo"];
    var fecha = frmPrincipal["segNoticias"]["selectedItems"][0]["fecha"];
    var imgtag = frmPrincipal["segNoticias"]["selectedItems"][0]["descripcion"].search("<img");
    var descripcion = (frmPrincipal["segNoticias"]["selectedItems"][0]["descripcion"]).slice(0, imgtag);
    //Imprime informacion capturada
    kony.print("####### N0rf3n titulo ==> " + titulo);
    kony.print("####### N0rf3n fecha ==> " + fecha);
    kony.print("####### N0rf3n imgtag ==> " + imgtag);
    kony.print("####### N0rf3n descripcion ==> " + descripcion);
    //enviar informacion a los componentes visuales.
    frmDetalle.lblTitulo.text = titulo;
    frmDetalle.lblFecha.text = fecha;
    frmDetalle.lblDescNoticia.text = descripcion;
    frmDetalle.show();
}