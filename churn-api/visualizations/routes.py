from flask import Blueprint, request, jsonify, current_app
from sqlalchemy import text
from __init__ import db
import pandas as pd

visualizations_bp = Blueprint('visualizations', __name__)

# Univariate Analysis
@visualizations_bp.route('/univariate', methods=['POST'])
def univariate_analysis():
    data = request.json
    feature_name = data.get('feature_name')

    if not feature_name:
        return jsonify({"message": "Feature name is required"}), 400

    try:
        # Log the feature being queried
        current_app.logger.info(f"Querying feature: {feature_name}")

        # Use quoted column names to handle case sensitivity
        query = text(f"SELECT \"{feature_name}\" FROM customer_data")
        current_app.logger.info(f"Executing query: SELECT \"{feature_name}\" FROM customer_data")

        # Execute the query
        result = db.session.execute(query).fetchall()

        if not result:
            current_app.logger.warning(f"No data found for feature: {feature_name}")
            return jsonify({"message": f"No data found for feature: {feature_name}"}), 404

        # Convert result to JSON (flattened list for Chart.js compatibility)
        df = pd.DataFrame(result, columns=[feature_name])
        return jsonify(df[feature_name].tolist()), 200

    except Exception as e:
        # Log the error
        current_app.logger.error(f"Error during univariate analysis: {str(e)}")
        return jsonify({"error": f"Error during univariate analysis: {str(e)}"}), 500

# Bivariate Analysis
@visualizations_bp.route('/bivariate', methods=['POST'])
def bivariate_analysis():
    data = request.json
    feature1 = data.get('feature1')
    feature2 = data.get('feature2')

    if not feature1 or not feature2:
        return jsonify({"message": "Both feature1 and feature2 are required"}), 400

    try:
        # Log features being queried
        current_app.logger.info(f"Querying features: {feature1}, {feature2}")

        # Use quoted column names for safety
        query = text(f'SELECT "{feature1}", "{feature2}" FROM customer_data')
        result = db.session.execute(query).fetchall()

        if not result:
            return jsonify({"message": f"No data found for features: {feature1}, {feature2}"}), 404

        # Convert result to JSON (list of paired values)
        df = pd.DataFrame(result, columns=[feature1, feature2])
        return jsonify(df.to_dict(orient='list')), 200

    except Exception as e:
        current_app.logger.error(f"Error during bivariate analysis: {str(e)}")
        return jsonify({"error": f"Error during bivariate analysis: {str(e)}"}), 500

# Multivariate Analysis
@visualizations_bp.route('/multivariate', methods=['POST'])
def multivariate_analysis():
    data = request.json
    feature_names = data.get('feature_names')

    if not feature_names or not isinstance(feature_names, list):
        return jsonify({"message": "A list of feature names is required"}), 400

    try:
        # Quote each feature name to handle case sensitivity and reserved keywords
        quoted_features = [f'"{feature}"' for feature in feature_names]
        selected_features = ", ".join(quoted_features)

        # Log the features being queried
        current_app.logger.info(f"Querying features: {', '.join(feature_names)}")

        # Query the database
        query = text(f"SELECT {selected_features} FROM customer_data")
        result = db.session.execute(query).fetchall()

        if not result:
            return jsonify({"message": f"No data found for features: {', '.join(feature_names)}"}), 404

        # Convert result to JSON (list of dictionaries)
        df = pd.DataFrame(result, columns=feature_names)
        return jsonify(df.to_dict(orient='records')), 200

    except Exception as e:
        current_app.logger.error(f"Error during multivariate analysis: {str(e)}")
        return jsonify({"error": f"Error during multivariate analysis: {str(e)}"}), 500

