const restify = require("restify");
const errors = require("restify-errors");
const corsMiddleware = require("restify-cors-middleware2");
const cors = corsMiddleware({
    origins: ['*']
});

const servidor = restify.createServer({
    name: "api_receitas",
    version: "1.0.0"
});

servidor.use(restify.plugins.acceptParser(servidor.acceptable));
servidor.use(restify.plugins.queryParser());
servidor.use(restify.plugins.bodyParser());
servidor.pre( cors.preflight );
servidor.use( cors.actual );

servidor.listen(8001, function(){
    console.log("%s executando em %s", servidor.name, servidor.url);
});

// Conexão com o banco de dados
var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'api_receitas'
    }
});

// Get de boas vindas
servidor.get('/', (req, res, next) => {
    res.send('Bem-vindo(a) à API de receitas!');   
});

// Get que mostra as categorias
servidor.get('/categorias', (req, res, next) => {
    knex('categorias').then((dados) =>{
        res.send(dados);
    },next); 
});

// Get que mostra as receitas
servidor.get('/receitas', (req, res, next) => {
    knex('receitas').then((dados) =>{
        res.send(dados);
    },next); 
});

// Get para mostrar as categorias por id
servidor.get('/categorias/:id', (req, res, next) => {
    const idCategoria = req.params.id;
    knex('categorias')
    .where('id_categoria', idCategoria)
    .first()
    .then((dados) =>{
        if(!dados){
            return res.send(new errors.BadRequestError('Esta categoria não foi encontrada'))
        }
        res.send(dados);
    },next);
});

// Get para mostrar as receitas por id
servidor.get('/receitas/:id', (req, res, next) => {
    const idReceita = req.params.id;
    knex('receitas')
    .where('id_receita', idReceita)
    .first()
    .then((dados) =>{
        if(!dados){
            return res.send(new errors.BadRequestError('Esta receita não foi encontrada'))
        }
        res.send(dados);
    },next);
});

// Get para mostrar as receitas por categoria
servidor.get('/receitas_categoria/:idcategoria', (req, res, next) => {
    const idCategoria = req.params.idcategoria;
  
    knex('receitas')
      .where('fk_categoria', idCategoria)
      .then((dados) => {
        if (dados.length === 0) {
          return res.send(new errors.BadRequestError('Não foram encontradas receitas para esta categoria'));
        }
        res.send(dados);
      })
      .catch((err) => {
        res.send(new errors.InternalServerError(err));
      });
  });
  
// Post para Cadastrar receitas
servidor.post('/receitas', (req, res, next) => {
    knex('receitas')
      .insert(req.body)
      .then(() => {
        res.send('Receita cadastrada com sucesso');
      })
  });

// Atualizar receitas
servidor.put('/atualizar_receitas/:id', (req, res, next) => {
    const idReceita = req.params.id;
    knex('receitas')
    .where('id_receita', idReceita)
    .update(req.body)
    .then((dados) =>{
        if(!dados){
            return res.send(new errors.BadRequestError('Esta receita não foi encontrada'))
        }
        res.send('Receita atualizada com sucesso!');
    })
    .catch(next);
});

// Deletar Receitas
servidor.del('/deletar_receita/:id', (req, res, next) => {
    const idReceita = req.params.id;
    knex('receitas')
    .where('id_receita', idReceita)
    .delete()
    .then((dados) =>{
        if(!dados){
            return res.send(new errors.BadRequestError('Esta receita não foi encontrado'))
        }
        res.send('Receita deletada');
    },next);
});