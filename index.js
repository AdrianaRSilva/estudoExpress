
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
          
       // const params =request.params;
        //console.log(params)
        const {id} = request.params; //aqui pegamos nosso ID
        const {title, owner} = request.body; // retornando uma nova função
    
        
        //aqui usamos o findIndex para percorrer todo o array atrás do id
        //findIndex vai percorrer todos os projetos, e toda vez que ele percorre na variavel project
        // caso ela satisfaça e retornar true, ela vai me retornar o id que estou passando (project => project.id === id)

        const projectIndex = projects.findIndex(project => project.id === id);
        if (projectIndex < 0) {
            return response.status(400).json({ error: 'Projeto não foi encontrado' });
        }
         // agora que tenha indice vou cira uma nova informação do projeto
         const project ={
            id,
            title,
            owner,
        } 
         projects[projectIndex] = project 
      
    
        return response.json(project);
    });
    app.delete('/projects/:id', (request, response) => {
       const { id } = request.params;
       
       const projectIndex = projects.findIndex(project => project.id === id);
       if (projectIndex < 0) {
           return response.status(400).json({ error: 'Projeto não foi encontrado' });
       }
       projects.splice(projectIndex, 1)
       
        return response.status(204).send();
    });
    
    app.listen(3000, () => {
        console.log('Servidor rodando...');
    })
        
