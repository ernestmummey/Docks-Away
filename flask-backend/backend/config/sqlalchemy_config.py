from backend import app
import os 

app.config['SQLALCHEMY_DATABASE_URI'] = os.eviron.get('DATABASE_URL')
# disable signals as well as gaining extra memory
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False