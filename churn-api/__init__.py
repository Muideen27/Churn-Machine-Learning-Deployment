from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from auth import auth_bp

db = SQLAlchemy()
bcrypt = Bcrypt()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')
    
    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)


    app.register_blueprint(auth_bp, url_prefix='/auth')
    
    return app
