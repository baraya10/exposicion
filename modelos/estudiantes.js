//Clase Modelo

function Estudiantes() {
    this.estudiantes = this.getEstudiantes() || [];
}

//Métodos de Clase Modelo

//Helper para soportar Arrays en LocalStorage

Estudiantes.prototype.getEstudiantes = function() {
    var estudiantes = localStorage.getItem('estudiantes');
    return estudiantes && JSON.parse(estudiantes);
}

Estudiantes.prototype.guardarItem = function(codigo, nombre, nota) {
    var guardado = false;
    try {
        var estudiante = {
            codigo: codigo,
            nombre: nombre,
            nota: parseInt(nota)
        };

        this.estudiantes.push(estudiante);

        localStorage.setItem('estudiantes', JSON.stringify(this.estudiantes));
        guardado = true;
    } catch (e) {
        console.log(e);
    }
    return guardado;

}

Estudiantes.prototype.eliminarItem = function(id) {
    var eliminado = false;
    try{
      this.estudiantes.splice(id, 1);
      localStorage.setItem('estudiantes', JSON.stringify(this.estudiantes));
      eliminado = true;
    }catch(e){
      console.log(e);
    }
    return eliminado;
}

Estudiantes.prototype.notas = function() {
    //ref.
    //https://stackoverflow.com/a/11142934
    var estudiantes = this.getEstudiantes();
    
    var limite = estudiantes.length;
    var promedio = 0;

    if (limite <= 0) return;

    var min = Infinity, max = -Infinity, maxId, minId;
    for (var i = 0; i < limite; i++) {
        if( estudiantes[i].nota < min) {
          min = estudiantes[i].nota;
          minId = i;
        };

        if( estudiantes[i].nota > max) {
          max = estudiantes[i].nota;
          maxId = i;
        }
        //referencia. https://stackoverflow.com/a/10359934
        promedio += parseInt( estudiantes[i].nota, 10 );
    };
    if( limite > 0 ) promedio = promedio/limite;
    return {
      min: estudiantes[minId],
      max: estudiantes[maxId],
      promedio : promedio
    };
}

Estudiantes.prototype.notaMax = function() {
  var notas = Estudiantes.prototype.notas();
  if( isFinite( notas.max ) ) return notas.max || null;
}

Estudiantes.prototype.notaMin = function() {
  var notas = Estudiantes.prototype.notas();
  if( isFinite( notas.min ) ) return notas.min || null;
}

Estudiantes.prototype.notaPromedio = function() {
  var notas = Estudiantes.prototype.notas();
  if( isFinite( notas.promedio ) ) return notas.promedio || null;
}
