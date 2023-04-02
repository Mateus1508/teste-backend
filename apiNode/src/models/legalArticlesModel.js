const connection = require('../database');

    const getAllByPublishDate = async () => { 
        const [articles] = await connection.promise().query('SELECT * FROM articles ORDER BY Data_de_Publicacao ASC');
        return articles;
    }
    
    const postAllPerCategory = async (legalArticles) => { 
        const {Categoria} = legalArticles;
            console.log(Categoria);      
            const [articles] = await connection.promise().query(`SELECT * FROM articles WHERE Categoria = ?`, [Categoria]);
            return articles;
    }
    
    const postAllPerTitulo = async (legalArticles) => { 
        const {Titulo} = legalArticles;
            console.log(Titulo);      
            const [articles] = await connection.promise().query(`SELECT * FROM articles WHERE Titulo LIKE %?%`, [Titulo]);
            return articles;
    }

module.exports = {
    getAllByPublishDate,
    postAllPerCategory,
    postAllPerTitulo
};