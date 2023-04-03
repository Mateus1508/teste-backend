const legalArticlesController = require('./controllers/legalArticlesController');
const express = require('express');
const routes = express.Router();

routes.get('/articles', legalArticlesController.getAllByPublishDate);

routes.get('/articles/search/termo-chave', legalArticlesController.getAllPerTitulo);

routes.get('/articles/:categoria', legalArticlesController.getAllPerCategory);


module.exports = routes;