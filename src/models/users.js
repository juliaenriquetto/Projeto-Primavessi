const mongoose = require('mongoose');
var conexao = require('../database/database')

var UsuarioSchema = conexao.Schema({
    nome:{type:String},
    telefone:{type:String},
    cpf:{type:String},
    email:{type:String},
    senha:{type:String}
})

module.exports = conexao.model("Usuario", UsuarioSchema)
