const mongoose = require('mongoose');


const schema = mongoose.Schema;

const lifeSchema = schema({
  name: String,
  spiritHash: String,
  plantOrAnimal: String
});

module.exports = mongoose.model('Life', lifeSchema);
