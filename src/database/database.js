const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/webapp');

module.exports = {Mongoose:mongoose};