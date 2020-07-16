import flask
import requests
import json
import sys

app = flask.Flask(__name__)
app.config["DEBUG"] = True

@app.route('/', methods=['GET'])
def home():
    return "<h1>Distant Reading Archive</h1><p>This site is a prototype API for distant reading of science fiction novels.</p>"

@app.route('/items/item/<itemId>', methods=['GET'])
def getItem(itemId):
    baseUrl = 'http://services.runescape.com/m=itemdb_oldschool'
    itemUrl = '/api/catalogue/detail.json?item='

    response = requests.get(baseUrl + itemUrl + itemId)
    print(baseUrl + itemUrl + itemId)

    if response.status_code != 200:
        #throw error
        return '<p>Error</p>'
    else:
        data = response.json()
        print(data)
        return data

app.run()