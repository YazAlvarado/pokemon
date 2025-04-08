const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(express.static("src/public"));

app.get("/", (req, res) => {
  res.send("¡Bienvenido a la API de Pokémon Explorer!");
});

const pokemonRoutes = require("./routes/pokemonRoutes");
app.use("/pokemons", pokemonRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
