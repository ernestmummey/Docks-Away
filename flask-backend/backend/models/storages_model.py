from backend import db

class Storage(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    slot = db.Column(db.String, nullable=False)