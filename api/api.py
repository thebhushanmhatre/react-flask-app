import time
from flask import Flask, request
from sympy import *
from sympy.plotting import plot

app = Flask(__name__, static_folder="../build", static_url_path="/")


@app.route("/")
def index():
  return app.send_static_file("index.html")


@app.route('/api/time')
def get_current_time():
  return {'time': time.time()}


@app.route('/api/plot', methods=['GET', 'POST'])
def plotgraph():
  input_text = request.form['equation']
  print("--------Inside Route '/api/plot'--------")
  print(f"--input_text={input_text}--")

  plot(input_text)
  
  # x = symbols('x')
  # f = x**2 + 5*x - 6

  # Wanted to send plot to UI
  # Will try later with matplotlib

  return "hi"


