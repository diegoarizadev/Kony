function cargarFrm(){
  //retorna la preferencia almacenada en el dispositivo
  var userPref = kony.store.getItem("userPreference")
  
  //valida cada una de las condiciones para ejecutar el frm definido
  if(userPref == "screenOne") {

    return frmScreenOne;

  }else if (userPref == "screenTwo"){
  
    return frmScreenTwo;

  }else{
    return frmStart		
  }
}