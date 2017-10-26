const mongoose = require('mongoose');


const schema = mongoose.Schema;

const problemSchema = schema({
  name: String,
  description: String,
  solution: String
});

module.exports = mongoose.model('Problem', problemSchema);
