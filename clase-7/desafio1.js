const movimientos =[
    100,
    -73,
    98,
    145,
    -12,
    -15
];
/*
devolver el saldo total de depósitos, el saldo
actual de retiros y el saldo actual del cliente.
*/

function calcularSaldos(movimientos){
    for (let i = 0; i < movimientos.length; i++) {
        if (movimientos[i] < 0){
            depositos = depositos + movimientos[i];
        } else{
            retiros = retiros + movimientos[i]
        }
    }
}
const total = depositos - retiros;
return { total, depositos, retiros};
