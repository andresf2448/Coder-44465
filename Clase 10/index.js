/*
//para guardar info en el storage
localStorage.setItem("nombre", "fabian");
localStorage.setItem("numero", "5");
localStorage.setItem("valor", "true");
 */

/* 
//traer la informacion del storage
let mensaje = localStorage.getItem("numero");
let numero = localStorage.getItem("nombre");
let valor = localStorage.getItem("valor");

console.log(mensaje);
console.log(numero);
console.log(valor); */

// sessionStorage.setItem("nombre", "juan");

/* localStorage.setItem("objeto", {nombre: "andres", edad: 70});
localStorage.setItem("arreglo", [2,3,4,5,4]); */

/* for(let i = 0; i < localStorage.length; i++){
  let clave = localStorage.key(i);
  console.log("clave", clave);
  console.log("valor", localStorage.getItem(clave));
} */

/* //para eliminar por item colocamos removeItem("clave");
localStorage.removeItem("nombre");
sessionStorage.removeItem("edad");
//para eliminar el storage completo hacemos clear();
localStorage.clear();
sessionStorage.clear(); */

/* let objeto = {nombre: "andres", edad: 70}
localStorage.setItem("objeto", JSON.stringify(objeto));
localStorage.setItem("arreglo", JSON.stringify([2,3,4,5,4])); */

/* let objeto = JSON.parse(localStorage.getItem("objeto"));
console.log(objeto);

let arreglo = localStorage.getItem("arreglo");
console.log(JSON.parse(arreglo)); */

/* const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 700 },
  { id: 3, nombre: "gorra", precio: 300 },
  { id: 4, nombre: "zapato", precio: 1450 },
];
 */
/* const guardarStorage = (clave, valor) => {localStorage.setItem(clave, valor)};

productos.forEach(producto => {
  guardarStorage(producto.id, JSON.stringify(producto));
}) */

// localStorage.setItem("carrito", JSON.stringify(productos));

/* let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

if(usuarioStorage){
  usuario = usuarioStorage;
  let mensaje = `Bienvenido ${usuario}`;
  alert(mensaje);
}else{
  usuario = prompt("Ingrese su usuario");
  sessionStorage.setItem("usuario", usuario);
} */

/* const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 700 },
  { id: 3, nombre: "gorra", precio: 300 },
  { id: 4, nombre: "zapato", precio: 1450 },
];

localStorage.setItem("carrito", JSON.stringify(productos)); */

let contenedor = document.getElementById("contenedor");
let boton = document.getElementById("boton");
let carrito = [];
let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

if(carritoStorage){
  carrito = carritoStorage;
}

carrito.forEach(item => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
  `;

  contenedor.append(div);
});

boton.addEventListener("click", () => {
  localStorage.clear();
  contenedor.innerHTML = "";
  alert("productos borrados");
})