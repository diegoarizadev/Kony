function getlocation() {
    kony.location.getCurrentPosition(gpsworked, gpserror, {
        enableHighAccuracy: true,
        timeout: 250,
        maximumAge: 2000
    });
}

function gpsworked(location) {
    kony.print("n0rf3n ==> latitude         : " + location.coords.latitude);
    kony.print("n0rf3n ==> longitude        : " + location.coords.longitude);
    kony.print("n0rf3n ==> altitude         : " + location.coords.altitude);
    kony.print("n0rf3n ==> accuracy         : " + location.coords.accuracy);
    kony.print("n0rf3n ==> altitudeaccuracy : " + location.coords.altitudeaccuracy);
    kony.print("n0rf3n ==> heading          : " + location.coords.heading);
    kony.print("n0rf3n ==> speed            : " + location.coords.speed);
    //Enviamos la informacion recopilada al componente.
    frmGeolocation.txtUbicacion.text = JSON.stringify(location);
}

function gpserror(err) {
    kony.print("n0rf3n ==> Error ==> Mensaje Error : " + err.message);
    kony.print("n0rf3n ==> Error ==> Codigo Error  : " + err.code);
    //Enviamos la informacion recopilada al componente.
    frmGeolocation.txtUbicacion.text = JSON.stringify(err);
}