

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [valor1, , valor2, , valor3, ...restoNumeros] = numeros;



const mascota = {
  nombre: "Max",
  tipo: "Perro",
  color: "Marrón",
  raza: "Labrador Retriever"
};


const { nombre, tipo, color, raza } = mascota;


console.log("Valor 1:", valor1);
console.log("Valor 2:", valor2);
console.log("Valor 3:", valor3);
console.log("Resto de los números:", restoNumeros);
console.log('----------------------------------')
console.log("Nombre de la mascota:", nombre);
console.log("Tipo de mascota:", tipo);
console.log("Color de la mascota:", color);
console.log("Raza de la mascota:", raza);

 
