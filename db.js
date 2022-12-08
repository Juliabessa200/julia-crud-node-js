const Sequelize = require('sequelize');

const sequelize = new Sequelize('bd', 'root','',{
host: 'localhost', 
dialect:'mysql'


sequelize.authenticate()
.then(function(){

 console.log("Conexão com o banco de dados realizada com sucesso!");

}).catch(function())
  console.log("erro: conexão com banco de dados não realizadav com sucesso ")


 });

 module.exports = sequelize;