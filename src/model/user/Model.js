const { model } = require('mongoose');
const UserSchema = require('./Schema');

const User = model('User', UserSchema);

module.exports = User;
