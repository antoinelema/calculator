import json
from datetime import datetime


def calculator(str_input):
    """ calcule le string passé en parametre
        return un resultat au format json
    """
    res = 'error'
    data = {}
    try:
        if str_input:
            res = str(eval(str_input))
            data['calcul'] = str_input
            txtSave(str_input, res)
    except Exception as e:
        raise e

    data['resultat'] = res
    print(data)
    return json.dumps(data)


def txtSave(lastCalcul, lastRes):
    """ enregistre le calcul effectué dans un fichier calculHistory.txt"""
    now = datetime.now().strftime('%d-%m-%Y %H:%M:%S')
    with open("calculHistory.txt", 'a') as file:
        file.write(now + " : " + lastCalcul + " = " + lastRes + ';')


def getTxtSaved():
    """permet de recuperer tout les calculs enregistrés dans le fichier"""
    try:
        with open("calculHistory.txt", 'rb') as file:
            return file.read()
    except Exception as e:
        return "No history yet"
