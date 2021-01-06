from flask import Flask, render_template, redirect

app = Flask(__name__)

@app.route("/")
def upload():
    "show page for user to upload picture"
    return render_template("color-changer.html")

@app.route("/greyed")
def display():
    "displays grey scale version of the picture"
    return render_template("changed.html")

if __name__ == "__main__":    
    app.run(debug=True, host='0.0.0.0')