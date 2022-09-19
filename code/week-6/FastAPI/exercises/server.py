from fastapi import FastAPI
import uvicorn
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

store = [
    {"name": "table", "inventory": 3, "price": 800},
    {"name": "chair", "inventory": 16, "price": 120},
    {"name": "couch", "inventory": 1, "price": 1200},
    {"name": "picture frame", "inventory": 31, "price": 70}
]

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/store/{name}")
async def get_price(name):
    for s in store:
        if s['name'] == name:
            return {"price": s['price']}
    return {"price": None}


@app.get("/store/buy/{name}")
async def buy_item(name):
    for item in store:
        if item['name'] == name:
            if item['inventory'] > 0:
                item['inventory'] -= 1
                return item
    return {"error": "item not in stock"}

@app.get("/sale")
async def sale(adminSale):
    if adminSale == "true":
        for item in store:
           if item['inventory'] > 10:
                item['price'] /= 2
                return store
    else:
        return store

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
