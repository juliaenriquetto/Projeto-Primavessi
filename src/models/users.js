const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Schema = mongoose.Schema({
    username: String,
    telefone: Int8Array,
    cpf:      Int8Array,
    email:    String,
    senha:    String
}, {collection: 'user'})

module.exposts = {UserSchema:userSchema}