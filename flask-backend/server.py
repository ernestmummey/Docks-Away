from backend import app



@app.route("/")
def index():
    return 'Flask is up and runnning'


if __name__=="__main__":
    app.run(debug=True)