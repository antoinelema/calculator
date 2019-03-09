from flask import Flask
from flask import request
from models.models import calculator, getTxtSaved
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/')
def home():
    """ route par defaut de l'API """
    return 'This is a simple calculator API'


@app.route('/calc', methods=['GET'])
def calc():
    """ route qui calcul le string qui arrive en requete """
    input = request.args.get('calc', default='', type=str)
    return (calculator(input))


@app.route('/history', methods=['GET'])
def history():
    """ Route qui affiche tout les calculs effectué """
    return (getTxtSaved())
