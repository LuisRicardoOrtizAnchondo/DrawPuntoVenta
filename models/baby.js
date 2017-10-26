const mongoose = require('mongoose');


const schema = mongoose.Schema;

const babySchema = schema({
  name: String,
  lastName: String,
  months: String
});

module.exports = mongoose.model('Baby', babySchema);

