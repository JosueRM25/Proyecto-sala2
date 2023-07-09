function miFuncion(){
    return "Hola mundo"
}
miFuncion();
console.log(miFuncion);


function sumar(num1, num2){
    return num1 + num2
}

const suma1 = sumar(2,4);
const suma2 = sumar(3,4);

//console.log(suma1);

//console.log(sumar(sumar(2,2), sumar(3,3)));


const funcionFlecha = (a,b,c)=> {
    return a + b + c
}

//console.log(funcionFlecha(1,2,3));

//const funcionENunaVariable = function(a,b,c){

}




function calcularArea(base,altura){
    return base* altura;
}
const area1 = calcularArea(3, 5);
console.log(area1);