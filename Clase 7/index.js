/* function mayorQue(n){
  return m => m > n;
}

let mayorQueCinco = mayorQue(5); // m => m > 5;
console.log(mayorQueCinco(20));

let mayorQueSiete = mayorQue(7); //m => m > 7;
console.log(mayorQueSiete(60)); */

/* function operaciones(op){
  if(op === "sumar"){
    return (x, y) => x + y;
  }

  if (op === "restar") {
    return (x, y) => x - y;
  }

  if (op === "multiplicar") {
    return (x, y) => x * y;
  }

  if (op === "dividir") {
    return (x, y) => x / y;
  }
}

let resta = operaciones("restar");
console.log(resta(9, 10)); */

/* function recorrer(arreglo, fn){
  for(const numero of arreglo){
    fn(numero);
  }
}

recorrer([1,2,3,4], console.log); */

// const cursos = [
//   {nombre: 'Javascript', precio: 15000},
//   {nombre: 'ReactJS', precio: 22000},
//   {nombre: 'AngularJS', precio: 22000},
//   {nombre: 'Desarrollo Web', precio: 16000},
// ];

//forEach recorre cada uno de lso elementos del arreglo
// cursos.forEach(curso => console.log(curso.precio));

// find encuentra el primer elemento que cumple la condicion
// let nombre = prompt("Ingrese el nombre del curso a encontrar");
// let encontrado = cursos.find(curso => curso.nombre === nombre);
// let mensaje = `
//   nombre: ${encontrado.nombre}
//   $${encontrado.precio}
// `;

// alert(mensaje);

/* const cursos = [
  { nombre: "Javascript", precio: 15000 },
  { nombre: "ReactJS", precio: 22000 },
  { nombre: "AngularJS", precio: 22000 },
  { nombre: "Desarrollo Web", precio: 16000 },
]; */

//filter filtra todos los elementos que cumplan la condicion
// let precio = parseInt(prompt("Ingrese el precio minimo"));
// let filtrados = cursos.filter(curso => curso.precio > precio);

// filtrados.forEach((item) => {
//   let mensaje = `
//   nombre: ${item.nombre}
//   $${item.precio}
// `;

//   alert(mensaje);
// });

//some verifica si existe al menos un elemento que cumple la condicion
// let nombre = prompt("Ingres el nombre del curso a verificar si existe");
// let existe = cursos.some(curso => curso.nombre === nombre);
// alert(existe);

/* const cursos = [
  { nombre: "Javascript", precio: 15000 },
  { nombre: "ReactJS", precio: 22000 },
  { nombre: "AngularJS", precio: 22000 },
  { nombre: "Desarrollo Web", precio: 16000 },
]; */

//map crear un nuevo arreglo con los elementos transformados o modificados
// let nombres = cursos.map(item => item.nombre);
// console.log(nombres);

// let preciosActualizados = cursos.map(item => {
//   return {
//     nombre: item.nombre,
//     precio: item.precio + item.precio * 0.21
//   };
// });

// console.log(preciosActualizados);

//Reduce, reduce todo el arrelgo a un único valor
// const numeros = [1, 2, 3, 4, 5];
// const total = numeros.reduce((acumulador, item) => acumulador + item, 11);
// console.log(total);

// const cursos = [
//   { nombre: "Javascript", precio: 15000 },
//   { nombre: "ReactJS", precio: 22000 },
//   { nombre: "AngularJS", precio: 22000 },
//   { nombre: "Desarrollo Web", precio: 16000 },
// ];

// const total = cursos.reduce((acumulador, item) => acumulador + item.precio, 0);
// console.log(total);

//Sort ordenar
// const numeros = [ 40, 1, 5, 200 ];
// console.log(numeros.sort((a, b) => a - b));
// console.log(numeros.sort((a, b) => b - a));

/* const items = [
  { name: "Pikachu", price: 21 },
  { name: "Charmander", price: 37 },
  { name: "Pidgey", price: 45 },
  { name: "Squirtle", price: 60 },
];

console.log(
  items.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }

    return 0;
  })
); */

//Math
/* console.log(Math.E);
console.log(Math.PI);
console.log(Math.max(1,2,3,4,5,6,7,7,777,5,4,999));
console.log(Math.min(1,2,3,4,5,6,7,7,777,5,4,999)); */
/* console.log(Math.ceil(3.45));
console.log(Math.floor(3.74));
console.log(Math.round(3.654)); */

// console.log(Math.sqrt(9));
// console.log(Math.random() * 10);

//Date
// console.log(Date());
// console.log(new Date(2020, 1, 15, 23, 40, 3));
/* const casiNavidad = new Date("December 24, 2022 23:59:59")
console.log(casiNavidad) */

/* const hoy = new Date("September 15, 2022")

console.log(hoy.getFullYear())
console.log(hoy.getMonth()) 
console.log(hoy.getDay()) */

/* const hoy = new Date("December 17, 2021");
console.log(hoy.toDateString());
console.log(hoy.toLocaleString());
console.log(hoy.toLocaleDateString());
console.log( hoy.toTimeString() ) */

const navidad = new Date("December 25, 2022");
const hoy = new Date("September 15, 2022");

console.log(navidad - hoy);
const milisegundosPorDia = 86400000;

console.log((navidad - hoy) / milisegundosPorDia);
