/* let numero = 5;
numero = numero + 1;
numero += 1;
numero++; */

/* 
condicion ? codigo cuando la condicion verdadera : codigo cuando la condicion falsa
*/

// let edad = 19;

// if(edad >= 18){
//   console.log("puedes entrar");
// }else{
//   console.log("no puedes entrar");
// }

// edad >= 18 ? console.log("puedes entrar") : console.log("no puedes entrar");

// let permiso;
// let edad = 30;

// if(edad >= 18){
//   permiso = true;
// }else{
//   permiso = false;
// }

// if(permiso){
//   console.log("puedes entrar");
// }else{
//   console.log("no puedes entrar");
// }

// let edad = 20;
// let permiso = edad >= 18 ? true : false;
// console.log(permiso);
// permiso ? console.log("puedes entrar") : console.log("no puedes entrar");

/* 
operador1 && operador2 si operador1 representa true retorna operador2
                        en caso contrario retorna operador1
*/

// const carrito = [1, 3, 4, 5];

// // if(carrito.length === 0){
// //   console.log("El carrito está vacío");
// // }

// carrito.length === 0 && console.log("El carrito esta vacio");

/* const usuario = {
  nombre: "andres",
  edad: 19
};

const ingreso = usuario.edad >= 18 && new Date();
console.log(ingreso); */

/* 
operador1 || operador2 si el operador1 no es falsy retorna operador1
                        en caso contrario retorna el operador2
*/

// console.log( 0 || "Falsy")  //falsy
// console.log( 40 || "Falsy")  //40
// console.log( null || "Falsy")  //falsy
// console.log( undefined || "Falsy")  //falsy
// console.log( "Hola Mundo" || "Falsy")  //hola mundo
// console.log( "" || "Falsy")  //falsy
// console.log( NaN || "Falsy")  //falsy
// console.log( true || "Falsy")  //true
// console.log( false || "Falsy") // falsy

/* const usuario = {
  nombre: "andres",
  edad: 19
};

const usuario1 = null;

console.log(usuario || "el usuario no existe");
console.log(usuario1 || "el usuario no existe"); */

// let carrito;
// let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

// if(carritoStorage){
//   carrito = carritoStorage;
// }else{
//   carrito = [];
// }

// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

/* const usuario = {
  nombre: "andres",
  edad: 19,
  telefono: {
    casa: 2345,
    trabajo: 234234
  }
};

console.log(usuario?.telefono?.trabajo || "El usuario no existe"); */

//DESESTRUCTURACION
/* const usuario = {
  nombre: "juan",
  edad: 45,
  direccion: "AV"
}; */

// let nombre = usuario.nombre;
// let edad = usuario.edad;
// let direccion = usuario.direccion;

/* let {
  nombre,
  edad,
  direccion
} = usuario;
console.log(nombre, edad); */

/* const usuario = {
  nombre: "juan",
  edad: 45,
  direccion: "AV",
  telefono: {
    cel: 1234234,
    casa: 234234,
    trabajo: 2134234,
  },
}; */

/* let {
  nombre,
  telefono: { cel },
} = usuario;

console.log(cel); */

/* const usuario = {
  nombre: "juan",
  edad: 45,
  direccion: "AV",
};

let { nombre: nombrePersona, edad } = usuario;
console.log(nombrePersona); */

/* const mostrar = ({nombre, edad, direccion}) => {
  console.log(nombre, edad, direccion);
};

const usuario = {
  nombre: "juan",
  edad: 45,
  direccion: "AV",
};

mostrar(usuario); */

/* const nombres = ["Juan", "Julieta", "Carlos", "Mariela"];
const [a, , b] = nombres;
console.log(a, b); */

/* const nombres = ["Juan", "Julieta", "Carlos", "Mariela"];
console.log(...nombres);
console.log(nombres.join(" ")); */

/* const numeros = [4, 77, 92, 10, 3, -32, 54, 11];
console.log(Math.max(...numeros)); */

/* let nombre = "andres";
let nombre1 = nombre;

nombre1 = "juan";
console.log(nombre);

|"andres"|        | "juan" | 
nombre            nombre1 */

/* let objeto = {nombre: "juan", edad: 50};
let objeto1 = {...objeto};

objeto1.nombre = "Mariano";

console.log(objeto);

| {nombre: "juan", edad: 50} |    | {nombre: "Mariano", edad: 50} |
    objeto                             objeto1





const usuario = {
  nombre: "juan",
  edad: 45,
  direccion: "AV",
};

const usuario1 = {
  ...usuario,
  nombre: "mariano",
  papa: "fabian"
}

console.log(usuario1); */

/* class Persona{
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }
}
let personas = [];
function valida(e){
  e.preventDefault();

  let inputs = e.target.children;
  let persona = new Persona(inputs[0].value, inputs[1].value)
  personas.push(persona);
} */

const mostrar = (...numeros) => {
  return numeros.reduce((acum, item) => acum + item, 0);
};

console.log(mostrar(1, 3, 3, 56, 67, 7, 8, 98, 5, 44, 2, 43434));