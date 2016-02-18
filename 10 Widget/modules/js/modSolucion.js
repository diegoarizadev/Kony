function cargarItems (){

  //Definicion de arreglos a cargar en el listbox secundario.
  var arrayPais     = [["default","Seleccione un país"],    ["57","Colombia"],["54","Argentina"],["52","Chile"]];
  var arrayCiudad   = [["default","Seleccione una ciudad"],  ["7","Bogotá"],   ["4","Medellín"],  ["5","Cali"]];
  var arrayvehiculo = [["default","Seleccione un vehiculo"],["10","Ford"],    ["11","Kia"],      ["12","Honda"]];
  
  //Obtener la categoria que ha seleccionado el usuario.
  categoria = frmWidget.lstbInicial.selectedKey;

  //dependiendo de la categoria selecionada se debe cargar la información en 
  // el listbox secundario.
  if(categoria == "inicial"){
    
    //Si la categoria es inicial no se mostrara el listbox secundario.
    frmWidget.lstbSecundario.setVisibility(false);
    
  }else if (categoria != "inicial"){
    
    //Si la categoria es diferente a la inicial se mostrara el listbox secundario.
    frmWidget.lstbSecundario.setVisibility(true);
  
    //Se evalua la opcion seleccionada para cargar la información en el listbox secuandario 
    if(categoria == "pais"){
      frmWidget.lstbSecundario.masterData=arrayPais;
      frmWidget.lstbSecundario.selectedKey="default";
    }else if (categoria == "ciudad"){
      frmWidget.lstbSecundario.masterData=arrayCiudad;
      frmWidget.lstbSecundario.selectedKey="default";
    }else if (categoria == "vehiculo"){
      frmWidget.lstbSecundario.masterData=arrayvehiculo;
      frmWidget.lstbSecundario.selectedKey="default";
    }
  
  }

}

// Función para poblar o cargar el segmento con datos.
function cargarDbSegment(){
  //Arreglo con la informacion delos productos.
  var InfoDB=[{precio:"$1000",producto:"Papa Sab",idproducto:"001"},
       	      {precio:"$800" ,producto:"Papa Cri" ,idproducto:"002"},
			  {precio:"$500" ,producto:"Cebolla"      ,idproducto:"003"},
			  {precio:"$400" ,producto:"Ajo"          ,idproducto:"004"},
			  {precio:"$950" ,producto:"Yerbabue"  ,idproducto:"005"}];
				 
  //Configuracion del segmento
  frmWidget2.segProductos.widgetDataMap = {lblProducto:"producto", lblProductoPrecio:"precio", idProducto:"idproducto"};
  //Envio de los datos.
  frmWidget2.segProductos.setData(InfoDB);
  //Impresión por consola.
  kony.print("N0rf3n InfoDB ==> " + JSON.stringify(InfoDB));
}

// Function to retrieve the selected segment record information and populates it on frmProductDetails

//Funcion para mostrar la informacion del producto en el from de detalle.
function mostrarInfoProducto(){

	//Recupera el producto seleccionado
	var productoSeleccionado = frmWidget2.segProductos.selectedItems[0];

    //Se envia la informacion del producto
	frmWidget2Detalle.lblNombeProducto.text  = productoSeleccionado.producto;
    frmWidget2Detalle.lblPrecioProducto.text = productoSeleccionado.precio;
    frmWidget2Detalle.lblIdProducto.text     = productoSeleccionado.idproducto;
    frmWidget2Detalle.show();
    
    kony.print("N0rf3n productoSeleccionado = => " + JSON.stringify(productoSeleccionado));
}