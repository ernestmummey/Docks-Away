from backend import db

class Storage(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    slot = db.Column(db.String(10), nullable=False)
    boat_id = db.Column(db.Integer, db.ForeignKey('boat.id'), nullable=False)