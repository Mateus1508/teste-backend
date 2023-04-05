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

Para rodar a API node serão necessários poucos passos. 

* Criar um *.env* e inserir as informações de acordo com o seu banco de dados. Utilize o *.env.example* como base;
* Ter o Node instalando na maáquina;
* instalar o *node_modules* no projeto com o comando ``npm install`` utilizado no prompt;
* Iniciar a API utilizando o ``npm start``.

## Erros no processo de criação

No banco os dados passados estão todos na mesma tabela, sem relacionamentos. Então, ao criar a rota de buscar categoria eu consigo retornar o valor via ´´req.params´´, mas quando adicionei a rota de filtro por termo-chave ouve um conflito entre as rotas, devido ao valor ser passado pelo nome do parametro a ser pesquisado e não por um CategoriaId por exemplo a API acaba não retornando a rota correta. Esse problema poderia ser resolvido, mas sairia da arquitetura RESTful.

´´
Mas caso queira realizar a pesquisa por termo-chave no padrão RESTful, seria necessário utilizar o ´´req.query´´ já que o valor passado obrigatoriamente tem que ser uma string. Ao fazer isso e realizar a consulta, percebi que o valor retornado é um array vazio, devido ao fato de mesmo utilizando outra rota a API redireciona para a rota de buscar por categoria.

Podemos ver em prática utilizando ``console.log()`` em cada um dos controllers, para ver em qual rota ele entra.


``
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
``
Ao pesquisar o termo-chave titulo o dessa forma http://localhost:4000/articles/search?Titulo=titulo o resultado é um "[]" e o console ativado é o "entrou 2", o da busca por categoria.

# Python

Para rodar o arquivo são necessários poucos passos também.

* Instalar a lib *requests* para consumir a API com ``pip install requests``;
* Instalar a lib *Pandas* para tratar os dados com ``pip install pandas``;
* Para rodar o arquivo utilize ``py index.py``.
