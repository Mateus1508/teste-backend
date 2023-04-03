import requests
import pandas as pd
import matplotlib.pyplot as plt

print('API artigos legais')


url = 'http://localhost:4000/articles'

response = requests.get(url)
data = response.json()

""" df = pd.DataFrame(data)

df.to_csv('articles.xlsx', index = False) """

def categoria():
    for i in range(len(data)):
        print(data[i]['Categoria'])



categoria()