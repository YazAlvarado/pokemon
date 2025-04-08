// src/routes/pokemonRoutes.js
const express = require("express");
const { getPaginatedPokemons } = require("../controllers/pokemonController"); // Asegúrate de la ruta

const router = express.Router();

// Ruta para obtener pokemones paginados
router.get("/", getPaginatedPokemons);

module.exports = router;
