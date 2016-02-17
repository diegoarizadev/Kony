function get_alert(){

  //para construir un Alert desde JS.
  kony.ui.Alert({message      : "Mensaje de alerta desde JS",
                 alertType    : constants.ALERT_TYPE_CONFIRMATION,
                 alertTitle   : "Alerta desde JS",
                 yesLabel     : "Si",
                 noLabel      : "No",
                 alertIcon    : null,
                 alertHandler : alertCallback}, {});
} 

function alertCallback(response){
  
  if (response  == true){ //response retorna un boolean (true/false)
  
     kony.print("Click en la opcion \SI/ del Alert.");
     
     frmA.txtSi.text = "---> Click +Positivo.!";
     frmA.txtNo.text = "Accion Ejecutada";
       
  }else{
    
     kony.print("Click en la opcion -->NO<-- del Alert.");
     
     frmA.txtNo.text = "---> Click -Negativo.";
     frmA.txtSi.text = "Accion Ejecutada";
   
  }

}