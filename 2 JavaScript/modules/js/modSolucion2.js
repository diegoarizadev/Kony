//Funcion que obtiene la informacion del boton que realizo click.
function get_actividad(widget){

	kony.print("El boton " + widget.id + " realizo click");
	
}

//Funcion para realizar el aumento al contador
function get_acumular(widget,value){

	widget.text = widget.text+value;
	
}