import requests
import pandas as pd

url = 'http://localhost:4000/articles'

response = requests.get(url)
data = response.json()

df = pd.DataFrame(data)
jsonDf = df.to_json()

"""quantidade de artigos por categoria"""
categoria = df['Categoria']
resultCategoria = categoria.value_counts()
print(resultCategoria)

"""quantidade de artigos por autor"""
autor = df['Autor']
resultAutor = autor.value_counts()
print(resultAutor)

"""Média de palavras por artigo."""
conteudo = df['Conteudo']
palavras = 0

for i in range(len(conteudo)):
    palavras += len(conteudo[i].split())

mediaPalavras = palavras/len(data)
print(mediaPalavras)









