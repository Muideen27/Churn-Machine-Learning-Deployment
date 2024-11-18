from flask import Blueprint, request, jsonify
from models import User
from __init__ import db, bcrypt
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.json
    hashed_pw = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    user = User(email=data['email'], password=hashed_pw)
    db.session.add(user)
    db.session.commit()
    return jsonify(message="User registered successfully!"), 201

@auth_bp.route('/signin', methods=['POST'])
def signin():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if user and bcrypt.check_password_hash(user.password, data['password']):
        access_token = create_access_token(identity=user.email)
        return jsonify(access_token=access_token), 200
    return jsonify(message="Invalid credentials!"), 401
