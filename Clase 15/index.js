/* 
fetch(url, config);
*/
/* const listado = document.getElementById("listado");

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => {
  data.forEach(publicacion => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h2>${publicacion.title}</h2>
      <p>${publicacion.body}</p>
    `;

    listado.append(li);
  });
})
.catch(error => console.log(error)); */

/* fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "Probando",
    body: "Nuestra primera prueba",
    userId: 1
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then(response => response.json())
.then(data => console.log(data)); */

/* const listado = document.getElementById("listado");

fetch("./data.json")
.then(response => response.json())
.then(data => {
  data.forEach(producto => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h2>${producto.nombre}</h2>
      <p>${producto.precio}</p>
      <p>${producto.id}</p>
      <hr/>
    `;

    listado.append(li);
  });
}) */

const traerProductos = async () => {
  const listado = document.getElementById("listado");

  try {
    //codigo peligroso
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    data.forEach((publicacion) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <h2>${publicacion.title}</h2>
        <p>${publicacion.body}</p>
      `;

      listado.append(li);
    });
  } catch (error) {
    console.log(error);
  }
};

traerProductos();
