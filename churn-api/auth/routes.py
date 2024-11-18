from flask import Blueprint, request, jsonify
from models import User
from __init__ import db, bcrypt
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.json

    # Validate input data
    if not data or not data.get('email') or not data.get('password'):
        return jsonify({"message": "Email and password are required"}), 400

    # Check if user already exists
    if User.query.filter_by(email=data['email']).first():
        return jsonify({"message": "User already exists"}), 409

    # Hash the password
    hashed_pw = bcrypt.generate_password_hash(data['password']).decode('utf-8')

    # Create a new user
    user = User(email=data['email'], password_hash=hashed_pw)
    db.session.add(user)
    db.session.commit()

    return jsonify(message="User registered successfully!"), 201

@auth_bp.route('/signin', methods=['POST'])
def signin():
    data = request.json

    # Validate input data
    if not data or not data.get('email') or not data.get('password'):
        return jsonify({"message": "Email and password are required"}), 400

    # Find the user by email
    user = User.query.filter_by(email=data['email']).first()

    # Check credentials
    if user and bcrypt.check_password_hash(user.password_hash, data['password']):
        access_token = create_access_token(identity=user.email)
        return jsonify(access_token=access_token, message="Login successful"), 200

    return jsonify(message="Invalid email or password"), 401
