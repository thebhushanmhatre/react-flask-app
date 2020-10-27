CLI Commands

To Create React App:
```
npx create-react-app react-flask-app
```

Create a folder api to create a flask app there:
```
mkdir api
cd api/
```

Using Python 3 Create Virtual Env And activating Virtual Env there:
```
source /opt/miniconda3/bin/activate
python -m venv venv
source ./venv/bin/activate
```

For installing flask:
```
pip install flask python-dotenv
```

```python-dotenv``` helps is reading key-value pairs in file:```.flaskenv```


Create Flask app in here as you like and to run the flask app:
```
flask run
```

Flask runs on port: 5000 and React on port: 3000

So we add proxy in package.json, So whenever React doesn't know what to serve it will serve proxy.
Also Added some scripts command in it.


To run app now:

For Frontend:
```
npm start
```
For Backend:
```
npm run start-api
```


