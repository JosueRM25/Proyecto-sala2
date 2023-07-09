let cursos = [
    ["HTML5", 4000],
    ["CSS3", 5000],
    ["JavaScript", 10000],
    ["React", 7000],
    ["Node.js", 15000]
  ];

  let cursosDH = ["HTML5", "CSS3", "React", "JavaScript"];

  function calcularMontoTotal(cursos, cursosDH) {
    let total = 0;

    cursosDH.forEach(function(cursosDH) {
      let cursoEncontrado = cursos.find(function(curso) {
        return curso[0].toUpperCase() === cursosDH;
      });

      if (cursoEncontrado) {
        total += cursoEncontrado[1];
      }
    });

    return total;
  }

  function obtenerInformacionAlumno(nombre, apellido, cursos, cursosDH) {
    var montoTotal = calcularMontoTotal(cursos, cursosDH);
    return "Nombre: " + nombre + "\nApellido: " + apellido + "\nMonto Total: $" + montoTotal;
  }

  let nombreAlumno = "Lautaro";
  let apellidoAlumno = "Madariaga";

  let informacionAlumno = obtenerInformacionAlumno(nombreAlumno, apellidoAlumno, cursos, cursosDH);
  console.log(informacionAlumno);