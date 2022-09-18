from fastapi import FastAPI
import uvicorn
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import requests


app = FastAPI()

#you were missing static folder (does not auto generate)
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
async def root():
    return FileResponse('./static/download.jpeg')

@app.get("/book/{name}")
async def get_book(name):
    res = requests.get('https://www.googleapis.com/books/v1/volumes?q={}'.format(name))
    return res.json()

@app.get('/maps')
def maps():
    return "Here's some stuff related to maps"


@app.get('/shoobi')
def shoobi():
    return "This here is the shoobi *route*"


@app.get("/landing/{username}")
async def greet_user(username):
    return {"message": "Hi there {}".format(username)}



if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
