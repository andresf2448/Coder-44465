/* 
Storage
localStorage //almacenamiento (recargas, cierres de página, reinicio)
sessionStorage //alamcenamiento (recargas)

setItem(clave, valor); // agregar un elemento al Storage
getItem(clave); //recuperar un elemento del Storage
JSON.stringify(value); //convertir a formato json el value para luego guardar en Storage
JSON.parse(value);// parse o convierte de formato json a el elemento representativo en el lenguaje
removeItem(clave); //Eliminar un valor del Storage por su clave
clear(); //Elimina todo el Storage
*/

/* const productos = [
  { id: 1, nombre: "zapato", precio: 1000 },
  { id: 2, nombre: "gorra", precio: 1000 },
  { id: 3, nombre: "camisa", precio: 1000 },
  { id: 4, nombre: "pantalon", precio: 1000 },
];

localStorage.setItem("carrito", JSON.stringify(productos)); */

/* const cambiarPrecio = (nombre, precio) => {
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  let producto = carrito.find(item => item.nombre === nombre);

  producto.precio = precio;
  localStorage.setItem("carrito", JSON.stringify(carrito));
}; */

/* let nombre = prompt("Ingrese el nombre del producto");
let precio = prompt("Ingrese el precio del producto");

cambiarPrecio(nombre, precio); */

/* const eliminar = (nombre) => {
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  carrito = carrito.filter(item => item.nombre != nombre);

  localStorage.setItem("carrito", JSON.stringify(carrito));
};

let nombre = prompt("Ingrese el nombre del producto");
eliminar(nombre); */

const crearProducto = (nombre, precio) => {
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  let producto = carrito.find(item => item.nombre === nombre);
  if(producto === undefined){
    let nuevoProducto = {
      id: carrito.length + 1,
      nombre: nombre,
      precio: precio
    };
    
    carrito.push(nuevoProducto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }else{
    alert("Este producto ya existe");
  }
};

let nombre = prompt("Ingrese el nombre del producto");
let precio = prompt("Ingrese el precio del producto");
crearProducto(nombre, precio);