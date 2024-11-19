from flask import Blueprint, request, jsonify
from sqlalchemy import text
from models import db
import pandas as pd

visualizations_bp = Blueprint('visualizations', __name__)

# Univariate Analysis
@visualizations_bp.route('/api/univariate', methods=['POST'])
def univariate_analysis():
    data = request.json
    feature_name = data.get('feature_name')

    if not feature_name:
        return jsonify({"message": "Feature name is required"}), 400

    try:
        # Query the feature from the database
        query = text(f"SELECT {feature_name} FROM customer_data")
        result = db.session.execute(query).fetchall()

        if not result:
            return jsonify({"message": f"No data found for feature: {feature_name}"}), 404

        # Convert result to JSON
        df = pd.DataFrame(result, columns=[feature_name])
        return jsonify(df.to_dict(orient='records')), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Bivariate Analysis
@visualizations_bp.route('/api/bivariate', methods=['POST'])
def bivariate_analysis():
    data = request.json
    feature1 = data.get('feature1')
    feature2 = data.get('feature2')

    if not feature1 or not feature2:
        return jsonify({"message": "Both feature1 and feature2 are required"}), 400

    try:
        query = text(f"SELECT {feature1}, {feature2} FROM customer_data")
        result = db.session.execute(query).fetchall()

        if not result:
            return jsonify({"message": f"No data found for features: {feature1}, {feature2}"}), 404

        df = pd.DataFrame(result, columns=[feature1, feature2])
        return jsonify(df.to_dict(orient='records')), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Multivariate Analysis
@visualizations_bp.route('/api/multivariate', methods=['POST'])
def multivariate_analysis():
    data = request.json
    feature_names = data.get('feature_names')

    if not feature_names or not isinstance(feature_names, list):
        return jsonify({"message": "A list of feature names is required"}), 400

    try:
        selected_features = ", ".join(feature_names)
        query = text(f"SELECT {selected_features} FROM customer_data")
        result = db.session.execute(query).fetchall()

        if not result:
            return jsonify({"message": f"No data found for features: {', '.join(feature_names)}"}), 404

        df = pd.DataFrame(result, columns=feature_names)
        return jsonify(df.to_dict(orient='records')), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500