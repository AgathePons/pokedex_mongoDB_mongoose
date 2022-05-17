const {Schema, model} = require('mongoose');

// on définit une structure pour notre model (notre class qui correspond à une collection dans Mongo)
const pokemonSchema = new Schema({
  id: Number,
  name: String
});

module.exports = model('Pokemon', pokemonSchema, 'pokedex');