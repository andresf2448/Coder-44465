/* 
estructura del condicioanl if

if(condicion){
  codigo a ejecutar en caso de que la condicion sea vedadera
}
*/
/* let nombre = "felipe";

if(nombre === "mariano"){
  console.log("hola mariano");
}

console.log("chao"); */

/* if("andres"){
  console.log("hola");
}

console.log("chao"); */

/* let nombre = prompt("Ingrese un nombre");

if(nombre === "camila"){
  alert("hola camila");
} */

/* 
estructura del if else

if(condicion){
  codigo a ejecutar en casio de que la condicion sea verdadera
}else{
  codigo a ejecutar en caso de que la condicion no sea verdadera
}
*/

/* let numero = 11;

if(numero === 10){
  console.log("eres el 10");
}else{
  console.log("no eres el 10");
} */

/* 
estructura del if else if else
if(condicion1){
  codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
  codigo a ejecutar cuando la condicion2 es verdadera
}else{
  codigo a ejecutar cuando ninguna de las dos condiciones es verdadera
}
*/

/* let numero = 70;

if(numero === 20){
  console.log("eres el 20");
}else if(numero === 30){
  console.log("eres el 30");
}else{
  console.log("no eres ni el 20 ni el 30");
}

console.log("final"); */

/* let nombre = prompt("Ingrese el nombre");

if(nombre === ""){
  alert("No ingresaste ningun nombre");
}else{
  let mensaje = `Bienvenido ${nombre}`;
  alert(mensaje);
} */

/* let respuesta = prompt("Terminaste la tarea?");

if(respuesta === "si"){
  alert("Puedes salir a jugar");
}else{
  alert("no puedes salir a jugar");
} */

/* let precio = 70;

if (precio < 20) {
  console.log("El precio es menor que 20");
} else if (precio < 50) {
  console.log("El precio es menor que 50");
} else if (precio < 100) {
  console.log("El precio es menor que 100");
} else {
  console.log("El precio es mayor que 100");
} */

/* let edad = parseInt(prompt("Ingrese su edad"));

if(edad < 15){
  alert("No puede entrar a la fiesta");
}else if(edad < 18){
  alert("Puede entrar a la fiesta con un adulto");
}else{
  alert("Puedes entrar a la fiesta");
}

let valor = true;
let valor1 = false; */

/* 
&& es verdadero cuando las condiciones son verdaderas en caso contrario es falso

|| es verdadero cuando al menos una de las condiciones es verdadera en caso contrario es falso
*/

let nombre = prompt("Ingrese un nombre");

if((nombre != "") && (nombre === "ANDRES" || nombre === "andres")){
  alert("Hola" + nombre);
}else{
  alert("quien eres?");
}