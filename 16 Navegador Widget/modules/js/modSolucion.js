//funcion para cargar la informacion en el widget 
function getStockQuotes(){

	//Captura el valor 
	var inputSymbol = frmBrowser.tbxInput.text;
	
    //inicializa la variable para asignar la propiedad al widget 
	var urlConfig = {URL: "http://finance.yahoo.com/q", requestMethod:constants.BROWSER_REQUEST_METHOD_GET, requestData: [["s",inputSymbol]]};
	
	//Asigna la  URL al navegador 
	frmBrowser.browserQuotes.requestURLConfig =  urlConfig;
	
	
}