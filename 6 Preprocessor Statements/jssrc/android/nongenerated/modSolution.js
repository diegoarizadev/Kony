//Funcion para obtener la información general del Dispositivo.
function get_infoDevice() {
    var info = "";
    //Armado String con la informacion del dispositivo.
    info = "Id dispositivo.        => " + kony.os.userAgent() + "\n" + "Bytes libres de mem.   => " + kony.os.freeMemory() + "\n" + "Camara soportada.      => " + kony.os.hasCameraSupport() + "\n" + "GPS Soportado.         => " + kony.os.hasGPSSupport() + "\n" + "Orientacion Soportada  => " + kony.os.hasOrientationSupport() + "\n" + "Touch Soportado        => " + kony.os.hasTouchSupport() + "\n" + "Acelerometro Soportado => " + kony.os.hasAccelerometerSupport() + "\n" + "Orientación Actual     => " + kony.os.getDeviceCurrentOrientation() + "\n" + "Info del dispositivo   => " + kony.os.deviceInfo();
    //imprimir por consola
    kony.print(info);
    //Enviar la informacion al front-end del dispositivo.
    frmPrincipal.lblInfoDevice.text = info;
}
//Funcion encargada de cambiar el tema dependiendo del dispositivo.
function cargarTema() {
    //Se ejecutara solo para dispositivos Android.
    if (frmPreSta.btnChangeStyle.skin == "sknAmarillo") {
        frmPreSta.btnChangeStyle.skin = "snkRojo";
    } else {
        //Termina el ciclo de vida de la APP
        kony.print("Cerrando App - Android");
        kony.application.exit();
    }
    //Se ejecutara solo para dispositivos Iphone.
    /*
  //Se ejecutara solo para otros dispositivos diferentes a IOS y Android.
   if (frmPreSta.btnChangeStyle.skin == "sknAmarillo"){
     frmPreSta.btnChangeStyle.skin = "snkRojo";
   }else{
      //Termina el ciclo de vida de la APP
     kony.print("Cerrando App - Otros.!");
     kony.application.exit();
   }
  */
}