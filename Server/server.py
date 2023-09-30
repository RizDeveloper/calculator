from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow all origins


@app.route('/api/calculate', methods=['POST'])
def calculate():
    first_number = float(request.json.get('firstNumber'))
    second_number = float(request.json.get('secondNumber'))
    operator = request.json.get('operator')

    result = None

    if operator == '+':
        result = first_number + second_number
    elif operator == '-':
        result = first_number - second_number
    elif operator == '*':
        result = first_number * second_number
    elif operator == '/':
        if second_number == 0:
            return jsonify({'error': 'Cannot divide by zero'}), 400
        result = first_number / second_number
    else:
        return jsonify({'error': 'Invalid operator'}), 400

    return jsonify({'result': result})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
