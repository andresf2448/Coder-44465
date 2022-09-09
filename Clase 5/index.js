/* 
estructura de un objeto
{key1: value1, key2: value2, ..., keyn: valuen}
*/

/* let nombre = "pepito";
let edad = 56;
let direccion = "AV"; */

/* let persona1 = {
  nombre: "pepito",
  edad: 56, 
  direccion: "AV"
}; */

/* console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.direccion);

let value = "nombre";
console.log(persona1[value]);
console.log(persona1["edad"]);
console.log(persona1["direccion"]); */

/* const persona1 = {
  nombre: "pepito",
  edad: 56, 
  direccion: "AV"
};

persona1.nombre = "ramon";
persona1["edad"] = 100;

console.log(persona1); */

/* function Persona(nombrePersona, edad, direccion){
  this.nombre = nombrePersona;
  this.edad = edad;
  this.direccion = direccion;
}

const persona1 = new Persona("andres", 50, "AV");
const persona2 = new Persona("pepito", 60, "AV1");
console.log(persona1.nombre);
console.log(persona2.nombre); */

/* function Producto(imagen, nombre, precio, envio){
  this.img = imagen;
  this.nombre = nombre;
  this.precio = precio;
  this.envio = envio;
}

const producto1 = new Producto("htttp....", "Monitor curvo 32 ...", 2145000, "gratis");
const producto2 = new Producto("htp....", "Monitor LG...", 953910, "no envio gratis"); */

/* function Producto(info){
  this.img = info.imagen;
  this.nombre = info.nombre;
  this.precio = info.precio;
  this.envio = info.envio;
  this.color = info.color;
}

let producto1 = new Producto(
  {
    imagen: "aasdf",
    precio: 1234,
    nombre: "Tv",
    color: "amarillo"
  }
) */

/* function Persona(nombrePersona, edad, direccion){
  this.nombre = nombrePersona;
  this.edad = edad;
  this.direccion = direccion;
  this.hablar = function(){console.log("hola soy " + this.nombre);}
}

const persona1 = new Persona("andres", 50, "AV"); */

/* function Persona(nombrePersona, edad, direccion){
  this.nombre = nombrePersona;
  this.edad = edad;
  this.direccion = direccion;
}

const persona1 = new Persona("andres", 50, "AV");
for(const clave in persona1){
  console.log(clave);
  console.log(persona1[clave]);
} */

/* function Persona(nombrePersona, edad, direccion){
  this.nombre = nombrePersona;
  this.edad = edad;
  this.direccion = direccion;
  this.hablar = function(){console.log("hola soy " + this.nombre);}
} */

/* 
estructura de las clases

class Nombre{
  constructor(parm1, parm2, ..., parmn){
    this.key1 = parm1;
    .
    .
    .
    this.keyn = parmn;
  }

  metodo1(){
    codigo del metodo1
  }

  metodo2(){
    codigo del metodo2
  }
}
*/

class Persona{
  constructor(nombre, edad, direccion){
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
  }

  hablar(){
    console.log("hola soy " + this.nombre);
  }
}

const persona1 = new Persona("andres", 50, "AV");
persona1.hablar();

class Producto{
  constructor(nombre, imagen, precio, cantidad){
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    // this.vendido = false;
    this.cantidad = cantidad;
  }

  vender(){
    this.cantidad = this.cantidad - 1;
  }
}

const producto1 = new Producto("monitor", "htt", 1234, 5);
producto1.precio = 1;
console.log(producto1);

producto1.vender();
console.log(producto1);

/* function Persona(nombre){
  this.nombre = nombre;
  this.hablar = function(){console.log("hola");}
}
const persona = new Persona("andres");
console.log(persona);

class Persona1{
  constructor(nombre){
    this.nombre = nombre;
  }

  hablar(){
    console.log("hola");
  }
}

const persona1 = new Persona1("andres");
console.log(persona1); */
