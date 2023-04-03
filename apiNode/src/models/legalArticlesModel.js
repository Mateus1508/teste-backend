const connection = require('../database');

    const getAllByPublishDate = async () => { 
        const [articles] = await connection.promise().query('SELECT * FROM articles ORDER BY Data_de_Publicacao ASC');
        return articles;
    }
    
    const getAllPerCategory = async (legalArticles) => { 
        const [articles] = await connection.promise().query(`SELECT * FROM articles WHERE Categoria LIKE '%${legalArticles}%'`);
        return articles;
    }
    
    const getAllPerTitulo = async (legalArticles) => { 
        let column;
        let value;
        const {Titulo, Autor} = legalArticles;
        if (Titulo) {
            column = "Titulo";
            value = Titulo;
        }
        if (Autor) {
            column = "Autor";
            value = Autor;
        }
        console.log(Titulo);      
        const [articles] = await connection.promise().query(`SELECT * FROM articles WHERE ${column} LIKE '%${value}%'`);
        return articles;
    }

module.exports = {
    getAllByPublishDate,
    getAllPerCategory,
    getAllPerTitulo
};