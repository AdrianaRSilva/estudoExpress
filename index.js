
const express = require('express');
const app  =express();

//console.log(app) para verificar se está fucionando
app.get ('/projects',(request, response)=> {
   const{title, owner} =request.query
   console.log(title)
   console.log(owner)
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'projeto 100'
    ])
         
    });
    app.post('/projects',(request, response)=> {
        return response.json([
           'Projeto 1',
           'Projeto 2',
           'projeto 3',
           'projeto 4'
        ])
    })
    app.put('/projects/:id', (request, response)=> {
        const params =request.params;
        console.log(params)
        return response.json([
           'Projeto 1',
           'Projeto 2',
           'projeto 3',
           'projeto 4',
           'projeto 5'
        ])
    })
    app.delete('/projects/:id', (request, response)=> {
        return response.json([
           'Projeto 50',
           'Projeto 2',
          
        ])
    })
    
    app.listen(3000);
        
