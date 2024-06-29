import os
from flask import Flask, render_template, redirect, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] =\
        'sqlite:///' + os.path.join(basedir, 'database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

app.config['SECRET_KEY'] = 'MLXH243rjBDrborb2o24ubiBIbibIUBImmfrdTWS7FDhdwYF56wPj8'

db = SQLAlchemy(app)
#TODO: Make database model

class City(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100), nullable=False)
    typeWaste = db.Column(db.Integer)
    recycledWaste = db.Column(db.Integer)
    leftWaste = db.Column(db.Integer)
    
    def __init__(self, name, typeWaste, recycledWaste, leftWaste, **kwargs):
        self.name = name
        self.typeWaste = typeWaste
        self.recycledWaste = recycledWaste
        self.leftWaste = leftWaste
        
class History(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    purchaseName = db.Column(db.String(100), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    purchaseDetails = db.Column(db.Text, nullable=True)
    purchased_at = db.Column(db.String())
    
    def __init__(self, purchaseName, quantity, purchaseDetails):
        self.purchaseName = purchaseName
        self.quantity = quantity
        self.purchaseDetails = purchaseDetails
        self.purchased_at = datetime.now().strftime("%m/%d/%Y, %H:%M:%S")
    

@app.route('/')
def index():
    cities = City.query.all()
    return render_template('index.html', cities = cities)

@app.route('/add', methods=['GET', 'POST'])
def add():
    if request.method == 'POST':
        city = City(name=request.form['name'], typeWaste=request.form['typeWaste'], recycledWaste=request.form['recycledWaste'], leftWaste=request.form['leftWaste'])
        db.session.add(city)
        db.session.commit()
        return redirect('/add')
    return render_template('add.html')

# @app.route('/<int:id>/viewAnalytics')
# def analytics(id):
#     city = City.query.filter_by(id=id).first()
#     return render_template('analytics.html', city=city)

# @app.route('/analytics', methods=['GET', 'POST'])
# def analytics():
#     if request.method == 'POST':
#         city = request.form.get('place')
#         city_data = City.query.filter_by(name=city).first()
#         return render_template('analytics.html', city=city)

@app.route('/history', methods=['GET', 'POST'])
def history():
    if request.method == 'POST':
        purchaseName = request.form['purchaseName']
        purchaseDetails = request.form['purchaseDetails']
        quantity = request.form['quantity']
        history = History(purchaseName=purchaseName, quantity=quantity, purchaseDetails=purchaseDetails)
        db.session.add(history)
        db.session.commit()
        return redirect('/history')
    # history = History.query.all()
    return render_template('history.html')

@app.route('/purchaseHistory')
def purchaseHistory():
    history = History.query.all()
    return render_template('purchaseHistory.html', history=history)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=6001)