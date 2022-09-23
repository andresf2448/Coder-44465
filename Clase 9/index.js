/* 
let contador = 0;

function respuesta(nombre){
  console.log("Click", nombre);
  contador = contador + 1;
}
let boton = document.getElementById("boton");
// boton.onclick = respuesta;
//MOUSE
boton.addEventListener("click", () => respuesta("andres")); */
// let saludo = document.getElementById("saludo");
// let boton = document.getElementById("boton");
// boton.addEventListener("mousedown", () => console.log("mousedown")); //cuando se presiona
// boton.addEventListener("mouseup", () => console.log("mouseup")); //cuando se levanta
// boton.addEventListener("mouseover", () => console.log("mouseover")); //cuando entro al elemento
// boton.addEventListener("click", () => console.log("click"));
// boton.addEventListener("mouseout", () => console.log("mouseout")); //cuando salgo del elemento
// boton.addEventListener("mousemove", () => console.log("mousemove"));

/* boton.addEventListener("mousedown", () => {
  saludo.className = "verde";
});

boton.addEventListener("mouseover", () => {
  saludo.className = "rojo";
});

boton.addEventListener("mouseout", () => {
  saludo.className = "azul";
}) */

//TECLADO
let input = document.getElementById("nombre");
let saludo = document.getElementById("saludo");
// input.addEventListener("keydown", () => console.log("keydown"));
/* input.addEventListener("keyup", (e) => {
  if(e.key === "a"){
    saludo.className = "rojo";
  }else if(e.key === "s"){
    saludo.className = "azul";
  }else if(e.key === "d"){
    saludo.className = "verde";
  }else{
    saludo.className = "amarillo";
  }
}); */

// input.addEventListener("change", () => console.log("change"));
/* input.addEventListener("input", () => {
  if(!input.value.includes("@")){
    saludo.innerHTML = "correo incorrecto"
    saludo.className = "rojo";
  }else{
    saludo.innerHTML = "correo correcto"
    saludo.className = "azul";
  }
});
 */

/* let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  
  let inputs = e.target.children;
  console.log(inputs[0].value);
  console.log(inputs[1].value);

  if(!inputs[0].value.includes(".gmail")){
    inputs[0].value = "";
  }
}) */
let productos = [
  { id: 1, nombre: "pantalon", precio: 1000 },
  { id: 2, nombre: "camisa", precio: 700 },
  { id: 3, nombre: "gorra", precio: 1500 },
  { id: 4, nombre: "zapato", precio: 300 },
];
let contenedor = document.getElementById("contenedor");

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  contenedor.innerHTML = "";
  let inputs = e.target.children;

  let producto = productos.find((item) => item.nombre === inputs[0].value);
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${producto.id}</h2>
    <p>Nombre: ${producto.nombre}</p>
    <b>$${producto.precio}</b>
  `;

  contenedor.append(div);
});
