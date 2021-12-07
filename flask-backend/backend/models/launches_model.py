from backend import db

class Launches(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    launch = db.Column(db.Boolean, nullable=False)
    time = db.Column(db.DateTime, nullable=False)
    boat_id = db.Column(db.Integer, db.ForeignKey('boat.id'), nullable=False)
    
    
    def __init__(self, launch, time):
        self.launch = launch
        self.time = time