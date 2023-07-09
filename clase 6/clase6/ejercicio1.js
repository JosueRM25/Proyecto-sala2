 /*● Acceder de manera aleatoria a diferentes elementos del array. Recuerda mostrar por
la consola los resultados.*/

const array = ['horno', 'lavadora', 'plancha', 'heladera', 'aire', 'licuadora'];

const numero = Math.trunc(Math.random() * array.length);

console.log(numero);

console.log(numero);
console.log(array[numero]);

const primerElemento = array.shift();
array.push(primerElemento);
console.log(array);

array.push('el nuevo elemento 1','nuevo elemento 2');

console.log(array);
console.log(array.length);


function buscarProducto(producto){
    if(array.includes('plancha 2')){
        console.log('Producto encontrado');
    } else{
        console.log('El producto buscado no existe');
    }
}

/*● Determinar la cantidad de elementos que posee la cadena de texto obtenida.*/
console.log(array.join(' ').split(' '));
//console.log(array.join(' ').length);

/*
● Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la
función adecuada para ello.*/
//console.log(array);


//array.replace('horno', 'batidora')
//console.log(array.replace('horno', 'batidora'));

/*● Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras
de la cadena de texto. Tener en cuenta que los elementos deben estar separados por
una coma.
*/

