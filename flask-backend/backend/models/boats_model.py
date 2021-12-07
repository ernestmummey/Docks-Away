from backend import db

class Boats(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    length = db.Column(db.Integer, nullable=False)
    brand = db.Column(db.String(30), nullable=False)
    description = db.Column(db.String(20), nullable=False)
    # 1:n
    user = db.relationship('users', backref='boats', lazy=True)
    storage = db.relationship('storages', backref='boats', lazy=True)
    launch = db.relationship('launches', backref='boats', lazy=True)
    stow = db.relationship('stows', backref='boats', lazy=True)
    # n:1
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)