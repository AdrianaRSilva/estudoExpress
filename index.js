
const express = require('express');
const { v4:uuidv4 } = require('uuid');
const app  = express();

app.use(express.json());

const projects = [];
/**
 * CRUD
 * 
 * MÉTODOS:
 * 
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATCH: Alterar uma informação no back-end
 * DELETE: Deletar informações do back-end
 * 
 * PARÂMETROS:
 * Query Params: Vamos usar principalmente para filtros e paginação
 * Rout Params: Identificar recursos na hora de atualizar ou deletar
 * Request Body: Resto do conteúdo na hora de criar ou editar um recurso
 * 
 */

//console.log(app) para verificar se está fucionando
app.get('/projects', (request, response) => {
    //const {title, owner} = request.query;

    //console.log(title);
    //console.log(owner);
    
    return response.json(projects);
        
    });
    app.post('/projects',(request, response) => {
        const { title, owner } = request.body;

        const project = {id: uuidv4(), title, owner};

        projects.push(project); // esse push vai jogar a criação do nosso projeto para op nosso array 

        return response.json(project) // sempre retornar o projeto recén criado e nunca exibir a lista completa
    });

    app.put('/projects/:id', (request, response) => {
        const params =request.params;
        console.log(params)
        return response.json([
           'Projeto 1',
           'Projeto 2',
           'projeto 3',
           'projeto 4',
           'projeto 5'
        ])
    });
    app.delete('/projects/:id', (request, response) => {
        return response.json([
           'Projeto 50',
           'Projeto 2',
          
        ])
    });
    
    app.listen(3000, () => {
        console.log('Servidor rodando...');
    })
        
