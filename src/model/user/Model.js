const { model } = require('mongoose');
const UserSchema = require('./Schema.js');

const User = model('User', UserSchema);

module.exports = User;
