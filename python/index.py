import requests
import pandas as pd
from openpyxl import Workbook
from openpyxl.worksheet.table import Table, TableStyleInfo

url = 'http://localhost:4000/articles'

response = requests.get(url)
data = response.json()
df = pd.DataFrame(data)

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
mediaPalavras = pd.DataFrame({"Artigo":mediaPalavras}, index=["Média_palavras"])
print(mediaPalavras)

finalResult = pd.concat([resultAutor,resultCategoria, mediaPalavras])
finalResult = pd.DataFrame(finalResult)
finalResult.to_excel('relatorio.xlsx')







