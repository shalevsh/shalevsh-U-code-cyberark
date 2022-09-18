import requests

priceObj = requests.get('http://localhost:8000/store/table')
print(priceObj.json())

itemObj = requests.get('http://localhost:8000/store/buy/chair')
print(itemObj.json())