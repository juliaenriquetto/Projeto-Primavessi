const express = require('express');
const app = express();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var path = require('path')

app.use(cookieParser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set("view engine","ejs") 

app.use(express.static(path.join(__dirname,"public")))

app.listen(8080, () => {
    console.log('API funcionando!');
})