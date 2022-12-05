const db = require('../database/database');
const user = require('../models/users');

const Users = db.Mongoose.model('esquemaUsers', user.Usuario, 'users');

exports.getUsuario = ('/usuarios', async(req, res) => {
    await Users.fing({}).lean().exec(function(e,listaRegistro){
        res.json(listaRegistro);
    });
});

exports.incluirUsuario = ('incluirUsuario', async(req,res) => {
    let username = req.query.username;
    let senha    = req.query.senha;
    let telefone = req.query.telefone;
    let cpf      = req.query.cpf;
    let email    = req.qery.email;

    let usuario = new Users({username, senha, telefone, cpf, email});

    try{
        await usuario.save()
        res.json;
    }
    catch(err){
        next(err)
    }
})

exports.alterarUsuario = ('alterarUsuario', async(req,res) => {
    let senha    = req.query.senha;
    let username = req.query.username;
    let telefone = req.query.telefone;
    let cpf      = req.query.cpf;
    let email    = req.query.email;

    await Users.updateOne({_senha:senha},{$set:{username:username, 
                        telefone:telefone, cpf:cpf, email:email}});
    res.send("Usuario alterado");
});

