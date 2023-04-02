import requests

print('API artigos legais')


url = 'http://localhost:4000/articles'

response = requests.get(url)
data = response.json()

print(data)