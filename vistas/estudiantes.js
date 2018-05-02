//Clase Vista

var modeloEstudiantes = new Estudiantes();


function Vista() {

}

//Métodos de Clase Modelo

Vista.prototype.inicioTabla = function(list) {
    var lista = modeloEstudiantes.estudiantes;
    this.actualizarTabla(lista);
}

Vista.prototype.guardarEstudiante = function(codigo, nombre, nota) {
    var formOkay = validar();
    if (formOkay) {

        var guardado = modeloEstudiantes.guardarItem($("#txtCodigo").val(), $("#txtNombre").val(), $("#txtNota").val());

        console.log(guardado);
        if (guardado === true) {
            alert("Registro almacenado");
            //limpiar formulario
            $('#agregar-estudiante')[0].reset();
            Vista.prototype.inicioTabla();
        }
    } else {
        alert("Debe revisar los campos del formulario");
    }

}

Vista.prototype.actualizarTabla = function(lista) {
    console.log('init table')
    var limite = lista.length;
    //if (limite <= 0) return;

    var tabla = '<table class="table table-striped table-responsive"><thead><tr><th>Codigo</th><th>Nombre</th><th>Nota</th><th>Eliminar</th></tr></thead><tbody>';

    // recorre el arreglo registro por registro y lo agrega
    //en la variable lista:

    for (var i = 0; i < limite; i++) {
        tabla += '<tr><td>' + lista[i].codigo + '</td>';
        tabla += '<td>' + lista[i].nombre + '</td>';
        tabla += '<td>' + lista[i].nota + '</td>';
        tabla += '<td><a href="#" class="btnEliminar" data-id="' + i + '" onclick="v.eliminarEstudiante(this)"> Eliminar</a></td></tr>';
    };

    tabla += '</tbody></table>';

    $('#lista-estudiantes').html(tabla);
}

Vista.prototype.eliminarEstudiante = function(el) {
    var id = el.dataset.id;
    modeloEstudiantes.eliminarItem(id);
    Vista.prototype.inicioTabla();
}

Vista.prototype.mostrarNotaMayor = function() {
    notas = modeloEstudiantes.notas();
    lista = [];
    lista.push(notas.max)
    if (lista.length > 0) {
        //referencia 'this' no funciona
        //debemos usar referencia completa
        Vista.prototype.actualizarTabla(lista);
    }
}

Vista.prototype.mostrarNotaMenor = function() {
    notas = modeloEstudiantes.notas();
    lista = [];
    lista.push(notas.min)
    if (lista.length > 0) {
        Vista.prototype.actualizarTabla(lista);
    }
}

Vista.prototype.mostrarNotaPromedio = function() {
    promedio = modeloEstudiantes.notaPromedio();
    alert('Nota promedio: ' + promedio);
}


var validar = function() {
    var fields = $("#agregar-estudiante").serializeArray();
    var validationOkay = true;
    //recorre todos los campos del formulario
    jQuery.each(fields, function(i, field) {
        var input = $("input[name=" + field.name + "]");
        if (field.value == '') {
            validationOkay = false;
            input.addClass('is-invalid');
        } else if (field.name == 'txtNota') {
            var nota = parseInt(input.val());
            //console.log( typeof nota );
            if (!numValido( nota )) {
                validationOkay = false;
                input.addClass('is-invalid');
            }
        } else {
            input.removeClass('is-invalid');
        }
        $("#results").append(field.value + " ");
    });
    return validationOkay;
}

var numValido = function(num) {
    return (isNaN(num) || num < 1 || num > 10) ? false : true;
}