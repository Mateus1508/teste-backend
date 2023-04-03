# MySQL 

## Criando banco de dados

``CREATE DATABASE legalarticlesdb´´

## Colocando banco em uso 

´´USE legalarticlesdb´´

## Criando tabela de artigos no banco

´´
CREATE TABLE articles (
ID int primary key auto_increment,
Titulo varchar(100) NOT NULL,
Autor varchar(100) NOT NULL,
Conteudo varchar(255) NOT NULL,
Data_de_Publicacao DATE NOT NULL,
Categoria varchar(30) NOT NULL
);
´´

## Inserindo alguns dados para teste

INSERT INTO articles (Titulo, Autor, Conteudo, Data_de_Publicacao, Categoria)
VALUES (value, value, value, value, value);

# API Node






## Erros no processo de criação

No banco os dados passados estão todos na mesma tabela, sem relacionamentos. Então, ao criar a rota de buscar categoria eu consigo retornar o valor via ´´req.params´´, mas quando adicionei a rota de filtro por termo-chave ouve um conflito entre as rotas, devido ao valor ser passado pelo nome do parametro a ser pesquisado e não por um CategoriaId por exemplo a API acaba não retornando a rota correta. Esse problema poderia ser resolvido, mas sairia da arquitetura RESTful.

Exemplo:
´´
 const getAllPerCategory = async (req, res) => {
        const legalArticles = await legalArticlesModel.getAllPerCategory(req.params.categoria);
        return res.status(200).json(legalArticles);
    };
´´
Retorno
´´
[
    {
        "ID": 1,
        "Titulo": "titulo 1",
        "Autor": "autor 1",
        "Conteudo": "conteudo 1",
        "Data_de_Publicacao": "2023-04-03T03:00:00.000Z",
        "Categoria": "civil"
    }
]
´´
Mas caso queira realizar a pesquisa por termo-chave no padrão RESTful, seria necessário utilizar o ´´req.query´´ já que o valor passado obrigatoriamente tem que ser uma string. Ao fazer isso e realizar a consulta, percebi que o valor retornado é um array vazio, devido ao fato de mesmo utilizando outra rota a API redireciona para a rota de buscar por categoria.

Podemos ver em prática utilizando ´´console.log()´´ em cada um dos controllers, para ver em qual rota ele entra.

´´
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
´´
Ao pesquisar o termo-chave titulo o dessa forma http://localhost:4000/articles/search?Titulo=titulo o resultado é um "[]" e o console ativado é o "entrou 2", o da busca por categoria.


## Tarefas
Crie uma API RESTful utilizando Node.js e Express.js que permita as seguintes
operações:
● Listar todos os artigos jurídicos ordenados por data de publicação; **OK**
● Filtrar os artigos jurídicos por categoria (Civil, Penal, Trabalhista, etc.); **OK**
● Buscar artigos jurídicos por termo-chave no título ou conteúdo. **OK**

 2: Python
Crie um script em Python que:
● Conecte-se à API criada na Parte 1; **OK**
● Recupere os dados dos artigos jurídicos; **OK**
● Gere um relatório em formato CSV com informações como:
i. quantidade de artigos por categoria
ii. quantidade de artigos por autor
iii. média de palavras por artigo.