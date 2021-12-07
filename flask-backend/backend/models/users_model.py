from backend.config.sqlalchemy_config import db

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name= db.Column(db.String(80), unique=True, nullable=False)
    last_name= db.Column(db.String(80), unique=True, nullable=False)
    # 1:n
    boat = db.relationship('boats', backref='users', lazy=True)
    # n:1
    boat_id = db.Column(db.Integer, db.ForeignKey('boat.id'), nullable=False)
    
    
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
        