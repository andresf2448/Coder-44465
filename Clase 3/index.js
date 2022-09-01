/* 
estructura del for

for(desde; hasta; actualizacion){
  codigo a repetir
}
*/

//index++    index = index + 1;
/* for(let index = 0; index < 80; index = index + 4){
  console.log(index);
} */

/* let numero = parseInt(prompt("Ingrese el numero"));

for(let index = 0; index <= 10; index++){
  let resultado = numero * index;
  let mensaje = `${numero} * ${index} = ${resultado}`;
  alert(mensaje);
} */

/* for(let turno = 1; turno <= 7; turno++){
  let nombre = prompt("ingrese su nombre");
  let mensaje = `Turno #${turno} Nombre: ${nombre}`;
  alert(mensaje);
} */

/* for(let i = 0; i < 10; i++){
  if(i === 5){
    break;
  }

  console.log(i);
}

console.log("terminamos"); */

/* for(let i = 0; i < 10; i++){
  if(i === 5){
    continue;
  }

  console.log(i);
}

console.log("terminamos"); */

/* 
estructura del bucle while

while(condicion){
  codigo a ejecutar en caso de que la condicion sea verdadera
}
*/

/* let entrada = prompt("Ingrese un dato");

while(entrada != "ESC"){
  let mensaje = `Ingresaste ${entrada}`;
  alert(mensaje);

  entrada = prompt("Ingrese un dato");
} */

/* let entrada = prompt("Ingrese el usuario");

while(entrada != "andres"){
  alert("usuario incorrecto");

  entrada = prompt("Ingrese el usuario");
}

alert("Bienvenido"); */

/* 
estructura do while
do{
  codigo a repetir la primera vez y mientras la condicion sea verdadera
}while(condicion);
*/

/* let valor = false;
while(valor){
  console.log("entramos");
} */

/* do{
  console.log("entramos");
}while(valor); */

/* let numero;
do{
   numero = prompt("Ingresar Número");
}while(parseInt(numero)); */

/* let i = 0;

while(i < 100){
  console.log("Hola");
  i++;
} */

/* 
estructura del switch

switch(valor){
  case valu1:
    codigo a ejecutar
    break;

  case valu2:
    codigo a ejecutar
    break;

  case valu3:
    codigo a ejecutar
    break;

  default:
    codigo a ejecutar
    break;
}
*/

/* let moneda = "usd";

switch (moneda) {
  case "cop":
    console.log("es de colombia");
    break;

  case "clp":
    console.log("es de chile");
    break;

  case "ars":
    console.log("es de argentina");
    break;

  default:
    console.log("moneda no identificada");
    break;
} */

// let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
/* while (entrada != "ESC") {
  switch (entrada) {
    case "ANA":
      alert("HOLA ANA");
      break;
    case "JUAN":
      alert("HOLA JUAN");
      break;
    default:
      alert("¿QUIÉN SOS?");
      break;
  }
  entrada = prompt("Ingresar un nombre");
} */

/* let repetir = true;

while(repetir){
  console.log("hola");
  let nombre = prompt("ingrese el nombre")
  
  if(nombre === "mariano"){
    repetir = false;
  }
} */

let entrada = prompt("Ingrese el usuario");

while(entrada != "andres"){
  alert("usuario incorrecto");

  entrada = prompt("Ingrese el usuario");
}

alert("Bienvenido");