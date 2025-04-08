const cache = require("../utils/cache"); // importar el módulo de caché

exports.getPokemonDetails = async (url) => {
  if (cache.has(url)) return cache.get(url);

  const res = await axios.get(url);
  const { name, types, sprites } = res.data;

  const result = {
    name,
    types: types.map((t) => t.type.name),
    image: sprites.front_default,
  };

  cache.set(url, result);
  return result;
};
