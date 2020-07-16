import json

f2 = open('a.json', 'w')
newData = {}

with open('itemList.json', 'r') as f:
    items = json.load(f)
    for itemId, data in items.items():
        newData[data['name']] = data

f2.write(json.dumps(newData, indent=4))