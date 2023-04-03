const legalArticlesModel = require('../models/legalArticlesModel');

    const getAllByPublishDate = async (req, res) => {
        console.log("entrou 1")
        const legalArticles = await legalArticlesModel.getAllByPublishDate();
        return res.status(200).json(legalArticles);
    };
    
    const getAllPerCategory = async (req, res) => {
        console.log("entrou 2")
        const legalArticles = await legalArticlesModel.getAllPerCategory(req.params.categoria);
        console.log(legalArticles)
        return res.status(200).json(legalArticles);
    };
    
    const getAllPerTitulo = async (req, res) => {
        console.log("entrou 3")
        const legalArticles = await legalArticlesModel.getAllPerTitulo(req.query);
        return res.status(200).json(legalArticles);
    };

module.exports = {
    getAllByPublishDate,
    getAllPerCategory,
    getAllPerTitulo
};
