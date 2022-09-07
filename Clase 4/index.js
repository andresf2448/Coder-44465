/* 
estructura de una funcion
function nombreFuncion(){
  codigo a ejecutar por la funcion
}
*/

/* function saludar(){
  let apellido = prompt("Ingrese su apellido");
  let mensaje = `Hola ${apellido}`;
  alert(mensaje);
}

saludar(); */
/* 
estructura de una funcion con parametros
function nombreFuncion(parm1, parm2, ..., parmn){
  codigo a ejecutar por la funcion
}
*/
/* function saludar(nombre, edad){
  let mensaje = `Hola ${nombre} tienes ${edad} de edad`;
  alert(mensaje);
}

let nombre = prompt("Ingrese su nombre");
let edad = prompt("ingrese su edad");

saludar(nombre, edad); */

/* function sumar(numero1, numero2){
  console.log("hola");
  console.log("chao");
  return numero1 + numero2;
}

let resultado = sumar(5,4);
console.log(resultado * 6); */

/* function calculadora(num1, num2, operacion) {
  switch (operacion) {
    case "+":
      return num1 + num2;
      break;

    case "-":
      return num1 - num2;
      break;

    case "*":
      return num1 * num2;
      break;

    case "/":
      return num1 / num2;
      break;

    default:
      return "operacion no disponible";
      break;
  }
}

console.log(calculadora(3, 4, "*")); */

/* function sumar(numero1, numero2){
  return numero1 + numero2;
}

let resultado = sumar(5,4);
console.log(resultado * 6); */

/* let numero1 = parseInt(prompt("ingrese numero"));
let numero2 = parseInt(prompt("ingrese numero")); */
/* let resultado;

function sumar(numero1, numero2){
  resultado = numero1 + numero2;
}

sumar(5, 6);
console.log(resultado); */

/* let nombre = "John Doe"; 

function saludar() {
    let nombre = "Juan Coder" 
    console.log(nombre)
}

console.log(nombre) 


saludar() */

/* function suma(num1, num2){
  let resultado = num1 + num2;

  return resultado;
}

function resta(num1, num2){
  let resultado = num1 - num2;

  return resultado;
} */

/* let suma = function(a, b){ return a + b};
console.log(suma(9, 7)); */
/* 
let suma = (a, b) => {return a + b};
console.log(suma(5,6)); */

const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva   = precio => precio * 0.21;
let precioProducto  = parseInt(prompt("Ingrese el precio del producto"));
let descuento = parseInt(prompt("Ingrese el descuento"));

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
alert(nuevoPrecio);



