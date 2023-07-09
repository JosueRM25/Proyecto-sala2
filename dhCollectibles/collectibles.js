
const fs = require('fs');

const importar = (marca) => {
  let data = fs.readFileSync(`./datos/figuras2.json`, 'utf-8');
  let objetoJSON = JSON.parse(data);
  return objetoJSON;
};

module.exports = {
  importar
};
console.log(importar('fs'));


