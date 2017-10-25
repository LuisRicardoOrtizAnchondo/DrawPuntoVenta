const mongoose = require('mongoose');


const schema = mongoose.Schema;

const userSchema = schema({
  name: String,
  lastName: String,
  email: String
});

module.exports = mongoose.model('User', userSchema);
