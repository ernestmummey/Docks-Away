from flask import Flask
from flask_sqlalchemy import Flask, SQLAlchemy

app = Flask(__name__)

db = SQLAlchemy(app)