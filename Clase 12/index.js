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

const usuario = {
  nombre: "andres",
  edad: 19,
  telefono: {
    casa: 2345,
    trabajo: 234234
  }
};

console.log(usuario?.telefono?.trabajo || "El usuario no existe");