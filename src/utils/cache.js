const cache = new Map();

exports.get = (key) => cache.get(key);
exports.set = (key, value) => cache.set(key, value);
exports.has = (key) => cache.has(key);
