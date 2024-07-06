const express = require("express")
const pat= require("path")
router=express.Router()




const cal1= function(req,res,next){

    console.log("CALBACK FUNCIONANDO...")
  }

router.get('/', (req, res,next) => {
    console.log("clinte conectado")
    res.sendFile(pat.join(__dirname+'/home.html'))
    next()
  },cal1)
  router.get('/c', (req, res) => {
    res.send("numero nao cadastradp")
  console.log("usuario em, contatos")
  
  })
 router.get('/h', (req, res) => {


   res.send('a hora de entrada foi '+ req.requestTime)
 })


module.exports= router