const Sequelize = require("sequelize")
const sequelize = new Sequelize('banco','root','4570',{

host:"localhost",
dialect:'mysql'

})

    var Tab= sequelize.define('usuarios',{
        nome:{
            type: Sequelize.STRING 
        } ,
        idade:{
            type:Sequelize.INTEGER
        },
        saldo:{
            type: Sequelize.FLOAT 
        }



    })



    Tab.create({

nome:"ygor hhh",
idade:19,
saldo:20000000



    
    })
sequelize.authenticate().then(function(){

console.log("deu certoooo")

}).catch(function(erro){


console.log("deu erro")

})