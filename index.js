const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var path = require("path");
var Usuario = require("./src/models/users");

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
      res.redirect("/cadastroFeito");
    }
  });
});

app.listen(8080, () => {
  console.log("API funcionando!");
});
