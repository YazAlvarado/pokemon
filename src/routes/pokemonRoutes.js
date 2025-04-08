// src/routes/pokemonRoutes.js
const express = require("express");
const { getPaginatedPokemons } = require("../controllers/pokemonController");

const router = express.Router();

router.get("/", getPaginatedPokemons);

module.exports = router;
