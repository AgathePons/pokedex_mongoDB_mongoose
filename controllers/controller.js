// import the model
const Pokemon = require('../models/pokemon');

const controller = {
  homePage: async function(req, res) {
    // get all pokemons in the db
    const pokemons = await Pokemon.find();
    res.render('home', {pokemons});
  }
};

module.exports = controller;