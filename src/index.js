const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static("src/public"));

// Ruta básica para la raíz
app.get("/", (req, res) => {
  res.send("¡Bienvenido a la API de Pokémon Explorer!");
});

// Importar las rutas de pokemones
const pokemonRoutes = require("./routes/pokemonRoutes");
app.use("/pokemons", pokemonRoutes); // Usar las rutas definidas

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
