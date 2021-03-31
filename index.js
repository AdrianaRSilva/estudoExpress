
const express = require('express')
const app  =express()
//console.log(app) para verificar se está fucionando
app.get ('/',(request , response)=> {
    response.send('Olá, mundo!') 
    })
    
    app.listen(3000, ()=>{               
        console.log("servidor rodando!")
    })
        
