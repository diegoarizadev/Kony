//funcion para limpiar.
function limpiar (){

  kony.store.clear();
  frmPrincipal.lblStatus.text = "Almacenamiento limpio.";
  frmPrincipal.txtKey.text = "";
  
}

//funcion para agregar
function agregar (){
  kony.store.setItem("key"+kony.store.length(), frmPrincipal.txtKey.text);
  frmPrincipal.lblStatus.text = "Almacenamiento Correcto.";
}

//funcion para leer y eliminar
function leerEliminar(){
  
  //Capacidad.
  var capacidad = kony.store.length();
  
  //Validación de la llave.
  if(capacidad != 0){
    
    //Lectura de la llave.
    var llave = kony.store.getItem(kony.store.key(capacidad-1));
    frmPrincipal.lblStatus.text = "La llave "+kony.store.key(capacidad-1)+" y su valor "+ llave;
    
    //Eliminacion de la llave.
    kony.store.removeItem(kony.store.key(capacidad-1));
    
  }else{
    frmPrincipal.lblStatus.text = "No hay nada que eliminar y leer!";
  }
  
  
}








