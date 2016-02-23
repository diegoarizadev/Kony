//Metodo para cargarla informacion inicial.
//Este metodo debe cargarse en el preshow del frmPrincipal
function cargarItems (){

  //Definicion de arreglo.
  var contactos=[["Amigos",[{contacto:"Pedro Alimaña"},{contacto:"Manu Chao"}]], 
  				 ["Trabajo",[{contacto:"ACDC"},{contacto:"Metallica"}]],
  				 ["Amiguitas",[{contacto:"Juliana Velez"},{contacto:"Jackelin Cardona"},{contacto:"Pilar Ramirez"}]],
  				 ["Clientes",[{contacto:"Natalia Paris"}]]
  				]
  				 
  //Especificacion del mapeo de arreglo.
  frmPrincipal.segAgenda.widgetDataMap={lblContacto:"contacto"};
  //envia informacion al componente
  frmPrincipal.segAgenda.setData(contactos);
}


//funcion para agregar componentes
function agregarContacto(){
   //Se inicializa la variable en false.
   makeExisting=false;

  //recupera la informacion de los componentes
  var grupo = frmPrincipal.txtGrupo.text;
  var nombre = frmPrincipal.txtNombre.text;
  
  var segDatos = frmPrincipal.segAgenda.data;
  var seglenght = segDatos.length;
  
  //ciclo para recorrer la informacion almacenada en segmento.
  for (var i=0; i<seglenght; i++){
   
    //Recuperar la sección
    var seccion = segDatos[i][0]
    
      if(seccion==grupo){
        frmPrincipal.segAgenda.addDataAt({contacto:nombre},0, i);
        //Setea la variable global en true.
        makeExisting=true;
	    break;
      }
    }
  
  //Si la variable global no fue seteada con true, el contacto no fue agreado 
  if (makeExisting==false){
        frmPrincipal.segAgenda.addSectionAt([[grupo,[{contacto:nombre}]]], 0);
  }
}

//funcion para eliminar un contacto
function eliminarContacto(){

  //Variables globales
  var ultimafila  = false;
  var registroEncontrado = false

  //Capturar la seleccion actual
  var seleccion = frmPrincipal.segAgenda.selectedItems[0]["contacto"];
  
  var segDatos = frmPrincipal.segAgenda.data;
  var seglenght = segDatos.length;
  
  for (var i=0; i<seglenght; i++){
  
    //Recuperar la sección
    var seccion = segDatos[i][1];
    var logitudFilas = seccion.length;
    
    for(var j=0; j< seccion.length; j++){
      var datoSeleccionado = seccion[j]["contacto"];
      if(seleccion==datoSeleccionado){
        registroEncontrado= true;
        if(seccion.length ==1){
          ultimafila=true;
        }
        break;
      } 
    }
    
    if(registroEncontrado==true){
      break;
    }
  }
  
  var segSeleccionIndex = frmPrincipal.segAgenda.selectedIndex;
  
  if(ultimafila==false){
    frmPrincipal.segAgenda.removeAt(segSeleccionIndex[1], segSeleccionIndex[0]);
  }else{
    frmPrincipal.segAgenda.removeSectionAt(segSeleccionIndex[0]);
  }
  
  

}