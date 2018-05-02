// Creación de objetos
var v = new Vista ();

$(function(){

	// actions init: estudiantes.getEstudiantes, 

	// actions buttons: estudiantes.getPromedio, estudiantes.getNotaMayor, estudiantes.getNotaMenor

	// actions buttons: estudiantes.deleteEstudiante

	v.inicioTabla();
	
	// evento clic del botón guardar
	$("#btnAgregar").click(v.guardarEstudiante);

	// evento clic del botón mostrar
    $("#btnMostrarNotaMayor").click(v.mostrarNotaMayor);

    $("#btnMostrarNotaMenor").click(v.mostrarNotaMenor);

    $("#btnMostrarNotaPromedio").click(v.mostrarNotaPromedio);

    //Navegacion
	$('.nav-link').click( function(e) {
	    $('.collapse').collapse('hide');
	});

});
