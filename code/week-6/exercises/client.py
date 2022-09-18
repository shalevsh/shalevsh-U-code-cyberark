import requests

priceObj = requests.get('http://localhost:8000/store/chair')
print(priceObj.json())