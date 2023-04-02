const legalArticlesModel = require('../models/legalArticlesModel');

    const getAllByPublishDate = async (req, res) => {
        const legalArticles = await legalArticlesModel.getAllByPublishDate();
        
        return res.status(200).json(legalArticles);
    };
    
    const postAllPerCategory = async (req, res) => {
        const legalArticles = await legalArticlesModel.postAllPerCategory(req.body);
        return res.status(201).json(legalArticles);
    };
    
    const postAllPerTitulo = async (req, res) => {
        const legalArticles = await legalArticlesModel.postAllPerTitulo(req.body);
        return res.status(201).json(legalArticles);
    };

module.exports = {
    getAllByPublishDate,
    postAllPerCategory,
    postAllPerTitulo
};
