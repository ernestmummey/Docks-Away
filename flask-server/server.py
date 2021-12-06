from src import app

@app.route("/") 
def hello_from_flask():
    return 'Hello from Flask'



if __name__=="__main__":
    app.run(debug=True)