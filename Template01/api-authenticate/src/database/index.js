const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Template01_Users', { promiseLibrary: global.Promise });
mongoose.Promise = global.Promise;

module.exports = mongoose;