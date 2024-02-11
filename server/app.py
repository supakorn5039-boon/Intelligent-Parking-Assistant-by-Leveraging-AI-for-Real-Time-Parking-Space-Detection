# app.py
from flask import Flask, jsonify
from flask_cors import CORS  # Import CORS to handle cross-origin requests

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Simulating parking space availability (replace with actual logic)
available_spaces = {"30": {"available": 10}}

@app.route('/api/parking-availability', methods=['GET'])
def get_parking_availability():
    return jsonify(available_spaces)

if __name__ == '__main__':
    app.run(debug=True)
