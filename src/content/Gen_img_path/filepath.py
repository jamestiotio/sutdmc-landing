from os import listdir
import json
mypath = '../../assets/images/before-after'
files = {}
for f in listdir(mypath):
    title = f.split(('.'))[0]
    type = f.split(('.'))[1]
    if not f.endswith('py'):
        if title not in files:
            files[title] = {}
        if type == 'jpg':
            files[title]['before'] = '../assets/images/before-after/'+f
        else:
            files[title]['after'] = '../assets/images/before-after/' +f
content = json.dumps(files,indent=4)
with open('details.json','w') as f:
    f.write(content)
f.close()