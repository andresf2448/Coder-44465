//getElementById
/* let div = document.getElementById("aplicacion");
console.log(div.innerHTML);
console.log(div.innerText); */

/* let parrafo = document.getElementById("parrafo");
console.log(parrafo.innerHTML);
console.log(parrafo.innerText); */

//getElementsByClassName
/* let perritos = document.getElementsByClassName("perritos");
console.log(perritos[0].innerHTML);
console.log(perritos[1].innerHTML);
console.log(perritos[2].innerHTML); */

//getElementsByTagName
/* let divs = document.getElementsByTagName("div");
console.log(divs[0].innerHTML);
console.log(divs[1].innerHTML);
console.log(divs[2].innerHTML); */

/* let perritos = document.getElementsByClassName("perritos");

for(const perrito of perritos){
  console.log(perrito.innerHTML);
} */

/* let saludo = document.getElementById("saludo");
saludo.innerHTML = "Hola coder";

let saludo = document.getElementById("saludo");
let sesion = prompt("Ingrese la seccion a la que desea ingresar");

if(sesion === "carrito"){
  saludo.innerHTML = "<h1>Bienvenido al carrito</h1>";
  saludo.className = "verde";
}else if(sesion === "favoritos"){
  saludo.innerHTML = "<h1>Bienvenido a los favoritos</h1>";
  saludo.className = "amarillo";
}else{
  saludo.innerHTML = "<h1>Bienvenido a nuestra página</h1>";
  saludo.className = "azul";
} */

//CREACIÓN DE NODOS
// let contenedor = document.getElementById("contenedor");
// let parrafo = document.createElement("p"); //primero crear la etiqueta
// parrafo.innerHTML = "<h2>Hola Coder</h2>"; //segundo agregar contenido
// // document.body.append(parrafo); //tercero agragar a un padre
// contenedor.append(parrafo);

/* let contenedor = document.getElementById("contenedor");
contenedor.remove(); */

//Arreglos
/* let personas = document.getElementById("personas");
let nombres = ["andres", "maria", "fabian", "angela", "carlos"];

nombres.forEach(item => {
  let li = document.createElement("li");
  li.innerHTML = item;
  personas.append(li);
}); */

/* let producto = {id: 1, nombre: "camisa", precio: 1000};
let contenedor = document.getElementById("contenedor");
let item = document.createElement("div");
item.innerHTML = `
  <h2>Id: ${producto.id}</h2>
  <p>Producto: ${producto.nombre}</p>
  <b>$${producto.precio}</b>
`;
contenedor.append(item); */

/* let contenedor = document.getElementById("contenedor");
let productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 700 },
  { id: 3, nombre: "gorra", precio: 500 },
  { id: 4, nombre: "zapato", precio: 1500 },
];

productos.forEach((producto) => {
  let item = document.createElement("div");
  item.innerHTML = `
    <h2>Id: ${producto.id}</h2>
    <p>Producto: ${producto.nombre}</p>
    <b>$${producto.precio}</b>
  `;
  contenedor.append(item);
}); */

//queryselector
// let div = document.querySelector("#contenedor");
/* let parrafo = document.querySelector(".texto");
console.log(parrafo); */

// let perritos = document.querySelectorAll(".perritos");

// console.log(["casa"].map(item => item.toUpperCase()));