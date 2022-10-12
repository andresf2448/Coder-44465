/* 
setTimeout(funcion, tiempo);
*/
/* console.log("inicio");

setTimeout(() => {
  console.log("intermedio");
}, 1000);

console.log("final"); */

/* let saludo = document.getElementById("saludo");
let boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  saludo.classList.add("color");

  setTimeout(() => {
    saludo.classList.remove("color");
  }, 2000);
}) */

/* for (let letra of "hola") {
  setTimeout(() => {
      console.log(letra)
  }, 1000)
}

for (let letra of "mundo") {
  setTimeout(() => {
      console.log(letra)
  }, 3000)
} */

/* console.log("inicio");

setTimeout(() => {
  console.log("intermedio");
}, 0);

console.log("final"); */

/* function multiply (x, y) {    
  return x * y;
}

function printSquare (x) {    
  let s = multiply(x, x);    
  console.log(s);
}

printSquare(5); */

/* console.log("inicio");

setTimeout(() => {
  console.log("intermedio");
}, 0);

console.log("final");
console.log("final");
console.log("final");
console.log("final"); */

/* setInterval(() => {
  console.log("Hola");
}, 3000) */

/* let counter = 0;

const interval = setInterval(() => {
  counter++;
  console.log("Counter: ", counter);

  if (counter >= 5) {
    clearInterval(interval);
    console.log("Se removió el intervalo");
  }
}, 1000); */

//PROMESAS
/* new Promise((resolve, reject) => {
  //cuerpo o codigo de la promesa
}); */

/* const futuro = (value) => {
  return new Promise((resolve, reject) => {
    value ? resolve([1, 2, 3, 4]) : reject("Promesa fallida");
  });
};

futuro(true)
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log("finalizamos proceso")); */

//simulacion del servidor
const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 700 },
  { id: 4, nombre: "zapato", precio: 500 },
  { id: 5, nombre: "gorra", precio: 1700 },
];

const traerDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
      // reject("Error intenta luego");
    }, 2000);
  });
};
//termina el codigo del servidor

traerDatos()
  .then((response) => {
    response.forEach((item) => {
      let div = document.createElement("div");
      div.innerHTML = `
      <h2>${item.id}</h2>
      <p>${item.nombre}</p>
      <b>$${item.precio}</b>
    `;

      document.body.append(div);
    });
  })
  .catch((error) => {
    let div = document.createElement("div");
    div.innerHTML = error;

    document.body.append(div);
  });