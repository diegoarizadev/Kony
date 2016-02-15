// Esta función se utiliza para navegar a través de las formas
function navegacion() {
    //Obtener identificacion del formulario
    var identificacionFrom = kony.application.getCurrentForm().id;
    //Si el formulario es A, se redirigira al formulario B.
    if (identificacionFrom == "frmA") {
        frmB.show();
    } else if (identificacionFrom == "frmB") {
        frmC.lblfrmC.text = "Texto del FrmA => " + frmA.txtboxa.text;
        frmC.show();
    } else if (identificacionFrom == "frmC") {
        frmA.txtboxa.text = "Escribe algo";
        frmA.show();
    }
}