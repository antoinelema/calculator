import json


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
    except Exception as e:
        raise e

    data['resultat'] = res
    print(data)
    return json.dumps(data)
