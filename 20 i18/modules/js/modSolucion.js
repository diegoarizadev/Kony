//funcion encargada de setear el titulo en el idioma local seteado.
function setTitleBarI18N(){
	frmDiccionario.txtTituloFrm.text = kony.i18n.getLocalizedString("diccionario");
}

//Funcion para instanciar de forma local el idioma seleccionado (Español)
function setSpanishLocale(){
  kony.i18n.setCurrentLocaleAsync("es", onSuccessCallback, onFailureCallback);
  frmPrincipal.show();
  frmDiccionario.destroy();}

//Funcion para instanciar de forma local el idioma seleccionado (Aleman)
function setGermanLocale(){
  kony.i18n.setCurrentLocaleAsync("de", onSuccessCallback, onFailureCallback);
  frmPrincipal.show();
  frmDiccionario.destroy();
}

//Funcion para instanciar de forma local el idioma seleccionado (Ingles)
function setEnglishLocale(){
  kony.i18n.setCurrentLocaleAsync("en_US", onSuccessCallback, onFailureCallback);
  frmPrincipal.show();
  frmDiccionario.destroy();
}

//Funcion para instanciar de forma local el idioma seleccionado (frances)
function setFrenchLocale(){
  kony.i18n.setCurrentLocaleAsync("fr", onSuccessCallback, onFailureCallback);
  frmPrincipal.show();
  frmDiccionario.destroy();
}

//Funcion para mostrar el error generado
function onFailureCallback (error){
	kony.print("########## N0rf3n ==>> Error occurred =>> "+JSON.stringify(error));
}

//Funcion para informar si el cambio e lenguaje se realizo de forma correcta
function onSuccessCallback (params){
	//This callback executes if locale is changed successfully 
	kony.print("########## N0rf3n ==>> Lenguaje =>>  "+JSON.stringify(params));
}

