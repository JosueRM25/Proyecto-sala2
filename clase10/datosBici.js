const fs = require("fs")
let bicicleta1 = function(fs){
    let lector = fs.readFileSync('./bicicleta.json')
return lector
}

console.log(bicicleta1());