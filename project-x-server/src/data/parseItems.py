import json

f = open('itemList.json', 'r')
itemList = json.load(f)
items = []

f2 = open('items.txt', 'w')

for itemId, data in itemList.items():
    if not data['duplicate'] and data['name'] not in items:
        items.append(data['name'])
        f2.write(data['name'].encode('utf-8') + '\n')

f.close()
f2.close()