const legalArticlesController = require('./controllers/legalArticlesController');
const legalArticlesMiddleware = require('./middlewares/legalArticlesMiddleware');
const express = require('express');
const routes = express.Router();

routes.get('/articles', legalArticlesController.getAllByPublishDate);

routes.post('/articles/', legalArticlesMiddleware.validateFilterPerCategory,
legalArticlesController.postAllPerCategory);

routes.post('/articles', legalArticlesMiddleware.validateFilterPerTitulo,
legalArticlesController.postAllPerTitulo);

module.exports = routes;