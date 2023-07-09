/*
Se acerca el día del padre y una tienda nos ha solicitado que creemos un programa
que calcule el precio a pagar de cada compra. 

Para calcular el precio total se debe tener en cuenta que ciertas 'categorías' de 
los productos tienen descuentos. 

A continuación se detallan dichos descuentos: 
  Categoría 'Ropa': 25% 
  Categoría 'Accesorios': 10%
  Categoría 'Calzado': 50%

Si no pertenecen a algúna de estas categorías no se debe aplicar ningún descuento.

Ademas si el medio de pago es efectivo, se debe aplicar otro descuento del 10% sobre el total. 

1. Dado el array de productos crear una función que retorne un objeto 
  con una lista de los productos divididos por categorías. 
  Las categorías a tener en cuenta para dividir son:
    1 - Ropa
    2 - Calzado 
    3 - Accesorios

  Si no pertenecen a ninguna de estas categorías agregarlo a una lista a parte 
  con el nombre 'otros'
  
  Criterios de aceptación:
  - La función debe recibir como parámetro una lista de productos
  Ejemplo de lo que debe devolver la función 
  
  ```js
  {
  ropa: [
    { id: 1, name: 'Remera', price: 999.99, category: 'Ropa' },
    { id: 3, name: 'Pantalón', price: 1499.99, category: 'Ropa' },
    { id: 6, name: 'Camisa', price: 1299.99, category: 'Ropa' }
  ],
  accesorios: [
    { id: 4, name: 'Reloj', price: 2999.99, category: 'Accesorios' },
    { id: 5, name: 'Mochila', price: 799.99, category: 'Accesorios' }
  ],
  calzados: [ { id: 2, name: 'Zapatos', price: 1999.99, category: 'Calzado' } ],
  otros: [ { id: 7, name: 'Gift card', price: 1000, category: null } ]
  }
  ```
  */




















/*2. Una vez obtenido el objeto, calcular el precio a pagar según la categoría. 
  
  Criterios de aceptación:
  - Usar una función para realizar el calculo. 
  - La función debe aceptar dos parámetros. Una lista con los productos y
    la categoría de los productos. 
  - La función debe retornar el precio a pagar con el descuento aplicado. 
  - La función debe validar que todos los productos pertenecen a la categoría
    que fue pasada como parámetro
  - Si existe un producto que no coincide con la categoría, la función debe 
    retornar null y mostrar un mensaje indicando el error

3. Sumar todos los totales de cada categoría y retornar el precio a pagar. 

  Criterios de aceptación:
  - Usar una función para realizar el calculo. 
  - La función debe aceptar dos parámetros. Una lista con los productos y
    el metódo de pago 
  - La función debe retornar el precio a pagar. (Aplicar el descuento si paga en efectivo)

### Extra:
  Cambiar la función del ejercicio 2.
  
  Hacer que únicamente reciba un parámetro. La lista de productos 

  Criterio de aceptación: 
    - La función debe validar que todos los productos pertenecen a la misma categoría.
*/
const productos = [
    {
      id: 1,
      name: 'Remera',
      price: 999.99,
      category: 'Ropa'
    },
    {
      id: 2,
      name: 'Zapatos',
      price: 1999.99,
      category: 'Calzado'
    },
    {
      id: 3,
      name: 'Pantalón',
      price: 1499.99,
      category: 'Ropa'
    },
    {
      id: 4,
      name: 'Reloj',
      price: 2999.99,
      category: 'Accesorios'
    },
    {
      id: 5,
      name: 'Mochila',
      price: 799.99,
      category: 'Accesorios'
    },
    {
      id: 6,
      name: 'Camisa',
      price: 1299.99,
      category: 'Ropa'
    },
    {
      id: 7, 
      name: 'Gift card',
      price: 1000,
      category: null
    },
    {
      id: 8,
      name: 'Perfume',
      price: 300,
      category: 'Fragancias'
    }
  ];
  
  Function dividirPorCategorias(productos){
    const ropa = [];
    const Calzado = [];
    const accesorios = [];
    const otros = [];
    for (let producto of productos) {
        if (producto.category === 'Ropa') {
            ropa.push(producto);
            }else if (producto.category === 'calzado') {
                Calzado.push(producto);
            }
        
    }
    };