//A function to set badge values
function setBadgeValue(){

	//Captura el valor digitado en el frontal
	var valor=frmBadge.txtBaged.text;
	
	//Setea el valor en el icono de la App.
	kony.application.setApplicationBadgeValue(valor);
	 
	//Setea el valor en el menu de la App.
	kony.application.setAppMenuBadgeValue("ApiDistintivoAppMenu", "service", valor);
    
    
	//Setea el valor en el boton de la App.
	frmBadge.btnBadge.setBadge(valor);
	
	frmBadge.show();

}