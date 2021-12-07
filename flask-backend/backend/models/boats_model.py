from operator import length_hint
from backend import db

class Boats(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    length = db.Column(db.Integer, nullable=False)
    brand = db.Column(db.String(30), nullable=False)
    description = db.Column(db.String(20), nullable=False)