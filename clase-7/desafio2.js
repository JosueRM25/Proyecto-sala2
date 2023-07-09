/*
Tabla de multiplicar
Uno de los equipos de desarrollo te pide ayuda para desarrollar un código, donde se pueda
visualizar la tabla de multiplicar del 1 al 10. El equipo indica que puedes usar algunos de los
ciclos o bucles aprendidos: for - while o do while,

Para ayudar al equipo de desarrollo, tu responsabilidad será:
1. Crear una función que no reciba ningún parámetro. Tendrá la responsabilidad de
generar de manera automática la tabla de multiplicar del 1 al 10.
2. Lo ideal es que función muestre al usuario algo así:
*/
/*
function tabla_de_multiplicar (numero){
 for(let i=1; i<=10; i++){
console.log(`${i} * ${numero} = ${i*numero}`);
  }
  }
tabla_de_multiplicar('2')
tabla_de_multiplicar('3')
*/

/*function tabla_de_multiplicar(){
    let i = 1;
    while(i <= 10) {
        console.log(`table de multiplicar del ${i}:`);
        let j =1;
        while (j <= 10) {
            console.log(`${i * j}`);
        }
    }
}

tabla_de_multiplicar();
*/

let tabla_de_multiplicar=1

while (tabla_de_multiplicar <=10){

    
    for(let i=1; i<=10; i++){
        console.log(`${i} * ${tabla_de_multiplicar} = ${i*tabla_de_multiplicar}`);
    }
    tabla_de_multiplicar= tabla_de_multiplicar+1
}