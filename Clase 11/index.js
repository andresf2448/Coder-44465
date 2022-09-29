/* let nombre = "andres";
let edad = parseInt(prompt("ingreda tu edad"));

//condicionales
if (edad < 15) {
  alert("Tu edad es menor a 15");
} else if (edad <= 18) {
  alert("Tu edad es mayor o igual a 15 y menor o igual que 18");
} else {
  alert("Tu edad es mayor a 18");
}
 */
//bucles
/* let array = [1, 2, 3, 4, 5];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
} */

/* let usuario = prompt("Ingrese el usuario");

while(usuario != "andres"){
  alert("usuario incorrecto");
  usuario = prompt("Ingrese el usuario");
}

alert("Bienvenido"); */

//Funciones
// function mensaje(){
//   return "hola";
// }

/* const mensaje = () => "hola";
console.log(mensaje()); */

/* const permiso = (edad) => {
  if(edad >= 18){
    return true;
  }else{
    return false;
  }
}

const mensaje = (autorizacion) => {
  if(autorizacion){
    console.log("puedes entrar");
  }else{
    console.log("no puedes entrar");
  }
}

let tienePermiso = permiso(12);

mensaje(tienePermiso); */

//Objetos
/* let persona = {
  nombre: "andres",
  edad: 45
};

console.log(persona.nombre);
console.log(persona["nombre"]); */

/* function Persona(nombre, edad){
  this.nombre = nombre;
  this.edad = edad;
}

let persona1 = new Persona("andres", 25);
let persona2 = new Persona("fabian", 30);

console.log(persona1.nombre);
console.log(persona2.nombre); */

/* class Persona{
  constructor(nombre, edad){
    this.edad = edad;
    this.nombre = nombre;
  }

  hablar(){
    console.log(`yo soy ${this.nombre}`);
  }
}

let persona1 = new Persona("pepito", 45);
console.log(persona1.nombre);
persona1.hablar(); */
/* class Producto;
let productos;
let productosPersonalizados;

productos.forEach(element => {
  productosPersonalizados.push(new Producto(element.nombre, element.precio));
}); */
/* 
const productos = [
  { id: 1, nombre: "Arroz", precio: 125 },
  { id: 2, nombre: "Fideo", precio: 70 },
  { id: 3, nombre: "Pan", precio: 50 },
  { id: 4, nombre: "Flan", precio: 100 },
];
let nombre = prompt("Ingrese el nombre del producto a consultar");
let productosEncontrados = productos.filter(item => item.nombre.includes(nombre)); */

/* let nombre = prompt("Ingrese el nombre del producto a consultar");

let producto = productos.find(item => item.nombre === nombre);
let mensaje = `
  id: ${producto.id}
  nombre: ${producto.nombre}
  precio: $${producto.precio}
`;


alert(mensaje); */

/* 
localStorage
setItem
getItem
JSON.stringify
JSON.parse
*/

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputs = e.target.children;
  console.log(inputs[0].value);
  console.log(inputs[1].value);
});
