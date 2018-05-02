(function(){
	
	var modeloEstudiantes = new Estudiantes();

	QUnit.test( "test Modelo Estudiantes Guardar", function( assert ) {
		assert.ok( true == modeloEstudiantes.guardarItem('test - codigo', 'test - nombre', 90) );
	});

	QUnit.test( "test Modelo Estudiantes Eliminar", function( assert ) {
		assert.ok( false !== modeloEstudiantes.eliminarItem(0) );
	});	

})();