let container = document.getElementById("container");

const getCharacters = async () => {
  //Primera forma

  // let response = await fetch("https://rickandmortyapi.com/api/character");
  // let data = await response.json();
  // let characters = data.results;

  // characters.forEach(character => {
  //   let item = document.createElement("div");
  //   item.innerHTML = `
  //     <h1>${character.name}</h1>
  //     <p>${character.status}</p>
  //     <p>${character.gender}</p>
  //     <img src="${character.image}">
  //     <hr/>
  //   `;

  //   container.append(item);
  // });

  try {
    let response = await axios("https://rickandmortyapi.com/api/character");
    let characters = response.data.results;

    let filtrados = characters.filter(character => character.status != "unknown");

    filtrados.forEach((character) => {
      let item = document.createElement("div");
      item.innerHTML = `
      <h1>${character.name}</h1>
      <p>${character.status}</p>
      <p>${character.gender}</p>
      <img src="${character.image}">
      <hr/>
    `;

      container.append(item);
    });
  } catch (error) {
    console.log(error);
  }
};

getCharacters();
