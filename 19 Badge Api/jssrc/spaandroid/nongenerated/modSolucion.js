//A function to set badge values
function setBadgeValue() {
    //Captura el valor digitado en el frontal
    var valor = frmPrincipal.txtBaged.text;
    //Setting badge value on application icon
    kony.application.setApplicationBadgeValue(valor);
    //Setting badge value on app menu Item which ID is "appMenuItem1"
    //Because we have created the app menus using IDE, AppMenu will have ID as AppIDAppMenu = (BadgAPIsAppMenu)
    kony.application.setAppMenuBadgeValue("ApiDistintivoAppMenu", "services", valor);
    //Setting badge value to button widget
    frmBadge.btnBadge.setBadge(userInput);
}