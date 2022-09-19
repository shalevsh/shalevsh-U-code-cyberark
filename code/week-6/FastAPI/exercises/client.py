import requests

priceObj = requests.get('http://localhost:8000/store/chair')
print(priceObj.json())

itemObj = requests.get('http://localhost:8000/store/buy/chair')
item = itemObj.json()
print(f"Congratulations, you've just bought{item}for {item['price']}. There are {item['inventory']} left now in the store")

storeObj = requests.get('http://localhost:8000/sale?admin=true')
print(storeObj.json())