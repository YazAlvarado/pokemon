document.addEventListener("DOMContentLoaded", () => {
  const pokemonContainer = document.getElementById("pokemon-container");
  const typeTranslation = {
    grass: "Planta",
    fire: "Fuego",
    water: "Agua",
    electric: "Eléctrico",
    poison: "Veneno",
    bug: "Bicho",
    normal: "Normal",
    flying: "Volador",
    fairy: "Hada",
    fighting: "Lucha",
    psychic: "Psíquico",
    rock: "Roca",
    ghost: "Fantasma",
    steel: "Acero",
    dragon: "Dragón",
    ice: "Hielo",
    dark: "Siniestro",
    ground: "Tierra",
    charm: "Encantador", // Por si necesitas más tipos en el futuro
  };

  // Llamada a la API para obtener los pokemones
  fetch("http://localhost:3000/pokemons")
    .then((response) => response.json())
    .then((pokemons) => {
      // Limpiar el contenedor antes de agregar los pokemones
      pokemonContainer.innerHTML = "";

      // Mostrar cada pokemon en la interfaz
      pokemons.forEach((pokemon) => {
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("pokemon-card");

        // Traducir tipos a español
        const translatedTypes = pokemon.types.map(
          (type) => typeTranslation[type.toLowerCase()] || type
        );

        pokemonCard.innerHTML = `
            <img src="${pokemon.image}" alt="${pokemon.name}">
            <h2>${pokemon.name}</h2>
            <p>Tipos: ${translatedTypes.join(", ")}</p>
          `;

        pokemonContainer.appendChild(pokemonCard);
      });
    })
    .catch((error) => {
      console.error("Error al obtener los pokemones:", error);
    });
});
