// src/controllers/pokemonController.js

const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();
const POKEAPI_URL = process.env.POKEAPI_URL || "https://pokeapi.co/api/v2";

// Función para obtener pokemones paginados
const getPaginatedPokemons = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    const response = await axios.get(
      `${POKEAPI_URL}/pokemon?offset=${offset}&limit=${limit}`
    );
    const pokemons = response.data.results;

    // Solo guardamos los datos necesarios: nombre, tipo e imagen
    const detailedPokemons = await Promise.all(
      pokemons.map(async (pokemon) => {
        const pokemonDetails = await axios.get(pokemon.url);
        return {
          name: pokemonDetails.data.name,
          types: pokemonDetails.data.types.map((type) => type.type.name),
          image: pokemonDetails.data.sprites.front_default,
        };
      })
    );

    res.json(detailedPokemons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getPaginatedPokemons };
