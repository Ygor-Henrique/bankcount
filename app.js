const express = require("express")
const pat= require("path")
const router= require("./route")
//const router = express.Router()
const app = express()

const calbacontat= function(req,res,next) {

console.log("cliente conected")
next()

}


app.use(calbacontat)
app.use(router)



app.listen(3333,()=>{
console.log('server rodando');

}
)