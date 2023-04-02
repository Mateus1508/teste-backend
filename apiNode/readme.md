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
Data_de_Publicação DATE NOT NULL,
Categoria varchar(30) NOT NULL
);
´´
## Tarefas
Crie uma API RESTful utilizando Node.js e Express.js que permita as seguintes
operações:
● Listar todos os artigos jurídicos ordenados por data de publicação; **OK**
● Filtrar os artigos jurídicos por categoria (Civil, Penal, Trabalhista, etc.); **OK**
● Buscar artigos jurídicos por termo-chave no título ou conteúdo.

 2: Python
Crie um script em Python que:
● Conecte-se à API criada na Parte 1; **OK**
● Recupere os dados dos artigos jurídicos; **OK**
● Gere um relatório em formato CSV com informações como:
i. quantidade de artigos por categoria
ii. quantidade de artigos por autor
iii. média de palavras por artigo.

