from fastapi import FastAPI
import uvicorn
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import requests

store = [
    {"name": "table", "inventory": 3, "price": 800},
    {"name": "chair", "inventory": 16, "price": 120},
    {"name": "couch", "inventory": 1, "price": 1200},
    {"name": "picture frame", "inventory": 31, "price": 70}
]

app = FastAPI()

# you were missing static folder (does not auto generate)
app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/")
async def root():
    return FileResponse('./static/download.jpeg')


# @app.get("/book/{name}")
# async def get_book(name):
#     res = requests.get(
#         'https://www.googleapis.com/books/v1/volumes?q={}'.format(name))
#     return res.json()


@app.get("/store/{name}")
async def get_price(name):
    for s in store:
        if s['name'] == name:
            return {"price": s['price']}

    return {"price": None}


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
