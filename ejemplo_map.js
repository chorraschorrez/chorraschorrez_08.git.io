
let arr = [3, 4, 5, 6];

for (let i = 0; i < arr.length; i++){
  arr[i] = arr[i] * 3;
}

console.log(arr); // [9, 12, 15, 18]



/* Crear array con tres Productos (nombre, precio unitario y número de unidades). 
Usando map del array, mostrar la siguiente información por consola: 
Fabada Litoral: 3 unidades, 1.5 eur /unidad. Total 4.5 eur. 
Usar interpolación con el $. 
*/

/*
let productos = [
    {nombre: "Fabada Litoral", precio : 1.0},
    {nombre: "Pan", precio : 0.50},
    {nombre: "Pan", precio : 0.50},
    {nombre: "leche", precio: 1.0}
];

let precioTotal=0
for (let i = 0; i < productos.length; i++){
    precio = precio+  arr[i].precio * 3;
  }

  console.log(precio);
*/

let productos = [
    {producto: "Fabada Litoral", cantidad:3, precio : 1.5},
    {producto: "Pan", cantidad:2, precio : 1},
    {producto: "Aarroz", cantidad:4, precio : 2},
];

function mostrarProducto(producto){
    let mensaje = `${producto.producto}. ${producto.cantidad} unidades. ${producto.precio} euros/unidad. Total ${producto.cantidad*producto.precio} eur. `;
    console.log(mensaje);
}

productos.map(mostrarProducto);

