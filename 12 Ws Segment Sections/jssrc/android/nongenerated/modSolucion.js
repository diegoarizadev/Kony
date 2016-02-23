function recuperarNoticias() {
    //Capturar las categorias seleccionadas.
    var seleccion1 = frmPrincipal.lstCategoria1.selectedKey;
    var seleccion2 = frmPrincipal.lstCategoria2.selectedKey;
    //Se valida que haya una seleccion
    if (kony.string.equalsIgnoreCase(seleccion1, "vacio") && kony.string.equalsIgnoreCase(seleccion2, "vacio")) {
        //Se envia un alert
        kony.ui.Alert({
            message: "Debe seleccionar alguna categoria",
            alertType: constants.ALERT_TYPE_INFO,
            alertTitle: "Alerta.!",
            yesLabel: "OK"
        }, {});
    } else {
        //Se inicializa el arreglo.
        segmentoDatos = [];
        var inputParams1 = {
            serviceID: "FoxNews",
            newsType: seleccion1
        };
        appmiddlewareinvokerasync(inputParams1, procesarResulado1);
        var inputParams2 = {
            serviceID: "FoxNews",
            newsType: seleccion2
        };
        appmiddlewareinvokerasync(inputParams2, procesarResulado2);
    }
}

function procesarResulado1(estado, responseFoxNews1) {
    //Verificar estado
    kony.print("N0rf3n ==> procesarResulado1 ==> Estado ==> " + JSON.stringify(estado));
    kony.print("N0rf3n ==> procesarResulado1 ==> Response ==> " + JSON.stringify(responseFoxNews1));
    kony.print("N0rf3n ==> procesarResulado1 ==> Noticias ==> " + JSON.stringify(responseFoxNews1.articles));
    if (estado == 400) {
        if (responseFoxNews1.opstatus == 0 && responseFoxNews1 != null) {
            if (responseFoxNews1.articulo != null) {
                if (responseFoxNews1.articulo.length > 0) {
                    /*frmPrincipal.segNoticias.widgetDataMap={lblNoticia:"titulo",hidDescripcion:"descripcion",hidFecha:"fecha"};
          frmPrincipal.segNoticias.setVisibility(true);
          frmPrincipal.segNoticias.setData(responseFoxNews1.articulo);*/
                    kony.print("N0rf3n ==> procesarResulado1 ==> " + JSON.stringify(responseFoxNews1));
                    segmentoDatos.push([frmPrincipal.lstCategoria1.selectedKeyValue[1], responseFoxNews1.articulo]);
                    mostrarDatasegmento();
                }
            }
        }
    } else {
        //Se muestra el error generado por pantalla.
        kony.ui.Alert({
            message: "N0rf3n ==> procesarResulado1 ==> Sin Servicio.! Estado " + responseFoxNews1.opstatus,
            alertType: constants.ALERT_TYPE_ERROR,
            alertTitle: "Error Opstatus",
            yesLabel: "OK"
        }, {});
    }
}

function procesarResulado2(estado, responseFoxNews2) {
    //Verificar estado
    kony.print("N0rf3n ==> procesarResulado2 ==> Estado ==> " + JSON.stringify(estado));
    kony.print("N0rf3n ==> procesarResulado2 ==> Response ==> " + JSON.stringify(responseFoxNews2));
    kony.print("N0rf3n ==> procesarResulado2 ==> Noticias ==> " + JSON.stringify(responseFoxNews2.articles));
    if (estado == 400) {
        if (responseFoxNews2.opstatus == 0 && responseFoxNews2 != null) {
            if (responseFoxNews2.articulo != null) {
                if (responseFoxNews2.articulo.length > 0) {
                    /*frmPrincipal.segNoticias.widgetDataMap={lblNoticia:"titulo",hidDescripcion:"descripcion",hidFecha:"fecha"};
          frmPrincipal.segNoticias.setVisibility(true);
          frmPrincipal.segNoticias.setData(responseFoxNews1.articulo);*/
                    kony.print("N0rf3n ==> procesarResulado2 ==> " + JSON.stringify(responseFoxNews2));
                    segmentoDatos.push([frmPrincipal.lstCategoria2.selectedKeyValue[1], responseFoxNews2.articulo]);
                    mostrarDatasegmento();
                }
            }
        }
    } else {
        //Se muestra el error generado por pantalla.
        kony.ui.Alert({
            message: "N0rf3n ==> procesarResulado2 ==> Sin Servicio.! Estado " + responseFoxNews2.opstatus,
            alertType: constants.ALERT_TYPE_ERROR,
            alertTitle: "Error Opstatus",
            yesLabel: "OK"
        }, {});
    }
}

function mostrarDatasegmento() {
    //Imprimir la información contenida en el arreglo.
    kony.print("N0rf3n ==> mostrarDatasegmento ==> segmentoDatos ==>> " + JSON.stringify(segmentoDatos));
    //Validar información del arreglo
    if (segmentoDatos.length == 2 && segmentoDatos != null) {
        frmPrincipal.segNoticias.widgetDataMap = {
            lblTituloNoticia: "titulo"
        };
        frmPrincipal.segNoticias.setVisibility(true);
        frmPrincipal.segNoticias.setData(segmentoDatos);
    }
}