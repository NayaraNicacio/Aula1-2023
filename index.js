const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get("/oi",function(req, res){
    res.send("Olá Mundo !!!");
});

//Lista de Herois 
const herois=["Mulher Maravilha", "Capitão Marvel", "Homem de Ferro"];

// Criando end point para ler todos os herois

app.get("/herois",function (req, res){
    res.send(herois);
})

app.listen(3000, function(){
    console.log("Aplicação rodando em http://localhost:3000/");
});