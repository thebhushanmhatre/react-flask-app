## React-Flask App

### Simple App with React for Frontend and Flask for Backend

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

Save the libraries.packages list used:
```
pip freeze > requirements.txt
```

Command used to install these libraries packages is:
```
pip install -r requirements.txt --ignore-installed
```


Preparation for Deployment:
Add following changes in api.py:
```python
app = Flask(__name__, static_folder="../build", static_url_path="/")


@app.route("/")
def index():
  return app.send_static_file("index.html")
```


---

## Deploying App using Python Webserver(Not Recommended):

```
npm build
cd api
source ./venv/bin/activate
pip install gunicorn
```

Run the App at port 5000
```
gunicorn -b :5000 api:app
```


## Deploying App using Nginx (Without Encyrption):

```
sudo apt-get install nginx
rm /etc/nginx/sites-enabled/default

touch /etc/nginx/sites-available/react-flask-app.nginx
```
Add following in this
```
server {
  listen 80;
  root /home/PyProjects/react-flask-app/build;
  index index.html;

  location / {
    try_files $uri $uri/ =404;
    add_header Cache-Control "no-cache";
  }

  location /static {
    expires 1y;
    add_header Cache-Control "public";
  }

  location /api {
    include proxy_params;
    proxy_pass http://localhost:5000;
  }
}
```

```
sudo ln -s /etc/nginx/sites-available/react-flask-app.nginx /etc/nginx/sites-enabled/react-flask-app.nginx
sudo systemcl reload nginx

sudo /etc/systemd/system/react-flask-app.service
```

```
[Unit]
Description=<a description of your app>
After=network.target

[Service]
User=ubuntu
WorkingDirectory=/home/PyProjects/react-flask-app/api
ExecStart=/home/PyProjects/react-flask-app/api/venv/bin/gunicorn -b:127.0.0.1:5000 api:app
Restart=always

[Install]
Wantedby=multi-user.target
```


```
sudo systemcl daemon-reload
sudo systemcl start react-flask-app
sudo systemcl status react-flask-app
sudo systemcl reload nginx
```

