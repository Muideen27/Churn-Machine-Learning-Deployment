from flask import Blueprint, request, jsonify
import os
import joblib
import numpy as np

# Define the blueprint
prediction_bp = Blueprint('prediction', __name__)

# Dynamically construct the model path relative to the project directory
current_dir = os.path.dirname(os.path.abspath(__file__))  # Get the directory of routes.py
model_path = os.path.join(current_dir, '..', 'models', 'cat_boost_model.pkl')  # Go up one level, then into models/

# Debug: Print the resolved model path to confirm correctness
print(f"Resolved model path: {model_path}")

# Load the model
model = joblib.load(model_path)

@prediction_bp.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the JSON data from the request
        data = request.json

        # Extract input features in the correct order
        input_features = [
            data.get('YEARS_WITH_BANK'),
            data.get('RISK_RATING'),
            data.get('CURRENCY'),
            data.get('AVE_BAL'),
            data.get('SCHEME_TYPE'),
            int(data.get('MOBILE_APP_ADOPTION', 0)),
            int(data.get('INTERNET_BANKING_ADOPTION', 0)),
            int(data.get('USSD_BANKING_ADOPTION', 0)),
            int(data.get('DIGITAL_LOAN', 0)),
            int(data.get('UNSECURED_LOAN', 0)),
            int(data.get('TERMLOAN_STATUS', 0)),
            int(data.get('CREDIT_CARD', 0)),
            data.get('SUBSEGMENT'),
            data.get('LAST_12_MONTHS_CREDIT_VOLUME'),
            data.get('LAST_12_MONTHS_DEBIT_VOLUME'),
            data.get('LAST_12_MONTHS_CREDIT_VALUE'),
            data.get('LAST_12_MONTHS_DEBIT_VALUE')
        ]

        # Make prediction
        prediction = model.predict([input_features])

        # Return prediction as JSON
        return jsonify({'prediction': int(prediction[0])})

    except Exception as e:
        return jsonify({'error': str(e)})
