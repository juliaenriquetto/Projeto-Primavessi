const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var path = require("path");
var Usuario = require("./src/models/users");
const nodemailer = require('nodemailer')

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.static("site"));
app.use("/css", express.static("./public/css"));
app.use("/images", express.static("./public/images"));

app.get("/", function (req, res) {
  res.render("site/index.html", {});
});

app.get("/cadastroFeito", function (req, res) {
    res.render("../src/views/cadastroFeito.ejs", {});
  });

  
app.get("/add", function (req, res) {
  res.render("../src/views/adiciona.ejs");
});

app.post("/add", function (req, res) {
  var usuario = new Usuario({
    nome: req.body.txtNome,
    telefone: req.body.txtTelefone,
    cpf: req.body.txtCpf,
    email: req.body.txtEmail,
    senha: req.body.txtSenha
  });
  usuario.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      try {
        const transporter = nodemailer.createTransport({
          host: 'smtp.mailtrap.io',
          port: Number(2525),
          auth: {
            user: '9f30be3bd2c40d',
            pass: '06bdf9436a5e16',
          },
          ssl: false,
          tls: true,
        });
  
        transporter.sendMail({
          to: {
            name: usuario.nome,
            address: usuario.email,
          },
          from: {
            name: 'Primavessi',
            address: 'contato@primavessi.com.br',
          },
          subject: 'Bem vindo à Primavessi!',
          html: '<h1 style="color: #2f3629; text-align: center; font-size: 2em; background-color: #e5e0c0;">Você se cadastrou na Primavessi!</h1><p style="text-align: center; font-size: 2em;">Bem vindo, ' + usuario.nome + '!. <br> Parabéns você já está cadastrado em nossa loja.</p>',
        });
      } catch {}

      res.redirect("/cadastroFeito");
    }
  });
});

app.listen(8080, () => {
  console.log("API funcionando!");
});
