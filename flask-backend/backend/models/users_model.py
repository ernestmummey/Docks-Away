from backend import db

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name= db.Column(db.String(80), unique=True, nullable=False)
    last_name= db.Column(db.String(80), unique=True, nullable=False)
