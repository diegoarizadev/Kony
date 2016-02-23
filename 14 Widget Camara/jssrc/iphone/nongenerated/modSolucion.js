//funcion para capturar imagenes de la camara.
function capturarImagen() {
    //captura la informacion de la camara.
    var imagenCapturada = frmPrincipal.btnCamara.rawBytes;
    //La imagen capturada se pasa al componente de tipo imagen.
    frmPrincipal.imgCamara.rawBytes = imagenCapturada;
    frmPrincipal.imgCamara.setVisibility(true);
}