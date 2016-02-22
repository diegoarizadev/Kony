function recuperarNoticias() {
    var seleccion = frmPrincipal.lstSecciones.selectedKey;
    if (seleccion == "vacio") {
        frmPrincipal.lblNotificacion.text = "La categoria no puede ser vacia.!";
    } else {
        frmPrincipal.lblNotificacion.text = "La categoria : " + seleccion;
        var noticiaSeleccionada = {
            serviceID: "FoxNews",
            newsType: seleccion
        };
        appmiddlewareinvokerasync(noticiaSeleccionada, procesarResulado);
    }
}

function procesarResulado(estado, responseFoxNews) {
    //Verificar estado
    kony.print("N0rf3n Estado ==> " + JSON.stringify(estado));
    kony.print("N0rf3n Response ==> " + JSON.stringify(responseFoxNews));
    kony.print("N0rf3n Noticias ==> " + JSON.stringify(responseFoxNews.articles));
    if (estado == 400) {
        if (responseFoxNews.opstatus == 0 && responseFoxNews != null) {
            if (responseFoxNews != null) {
                if (responseFoxNews > 0) {
                    frmPrincipal.segNoticias.widgetDataMap = {
                        lblNoticia: "titulo",
                        hidDescripcion: "descripcion",
                        hidFecha: "fecha"
                    };
                    frmPrincipal.segNoticias.setVisibility(true);
                    frmPrincipal.segNoticias.setData(responseFoxNews.articles);
                    kony.print("N0rf3n Noticias ==> " + JSON.stringify(responseFoxNews.articles));
                }
            }
        }
    } else {
        frmPrincipal.lblNotificacion.text = "Sin Servicio.! Estado =>" + responseFoxNews.opstatus;
    }
}
// This function navigates to frmNewsDetails and displays the selected segment Record information
function displayDetails() {
    //Setting the title
    frmNewsDetails.lblTitle.text = frmFoxNews["segNewsTitle"]["selectedItems"][0]["title"];
    //Setting the pubDate
    frmNewsDetails.lblPubDate.text = "Publication date: " + frmFoxNews["segNewsTitle"]["selectedItems"][0]["pubDate"];
    // Finding out the location of the first instance of first Image tag
    var imgTagLocation = frmFoxNews["segNewsTitle"]["selectedItems"][0]["desc"].search("<img");
    //Trimming the data till imgTagLocation and setting the description
    frmNewsDetails.lblDescription.text = ((frmFoxNews["segNewsTitle"]["selectedItems"][0]["desc"]).slice(0, imgTagLocation));
    frmNewsDetails.show();
}