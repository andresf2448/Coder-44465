/* const productos = [
  { id: 1, nombre: "camisa", precio: 700 },
  { id: 2, nombre: "pantalon", precio: 1500 },
  { id: 3, nombre: "gorra", precio: 300 },
  { id: 4, nombre: "zapato", precio: 2000 },
]; */

/* productos.forEach(item => {
  console.log(item.id, item.nombre, item.precio);
}); */
/* productos.forEach(item => {
  console.log(item.id, item.nombre, item.precio);
}); */
/* let nombre = prompt("Ingrese el nombre del producto");
let encontrado = productos.find((ropa) => ropa.nombre === nombre);

let mostrar = `
     nombre: ${encontrado.nombre}
     $${encontrado.precio}
   `;

alert(mostrar); */

/* let precio = parseInt(prompt("Ingrese el valor minimo"));
const filtrados = productos.filter((producto) => producto.precio > precio);

filtrados.forEach((item) => {
  let mostrar = `
     nombre: ${item.nombre}
     $${item.precio}
   `;
  alert(mostrar);
}); */
/* const productos = [
  { id: 1, nombre: "camisa", precio: 700 },
  { id: 2, nombre: "pantalon", precio: 1500 },
  { id: 3, nombre: "gorra", precio: 300 },
  { id: 4, nombre: "zapato", precio: 2000 },
]; */
//map
//un arreglo de solo precios
//un arreglo de solo nombres
//un arreglo con modificacion de precios
/* let precios = productos.map(item => item.precio);
let nombres = productos.map(item => item.nombre);
let actualizacion = productos.map(item => {
  return {
    id: item.id,
    nombre: item.nombre,
    precio: item.precio + 1000
  };
});

console.log(actualizacion); */

const productos = [
  { id: 1, nombre: "camisa", precio: 700 },
  { id: 2, nombre: "pantalon", precio: 1500 },
  { id: 3, nombre: "gorra", precio: 300 },
  { id: 4, nombre: "zapato", precio: 2000 },
];

productos.forEach((item) => {
  let mostrar = `
     nombre: ${item.nombre}
     $${item.precio}
   `;

   alert(mostrar);
});
