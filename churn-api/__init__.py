from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager

db = SQLAlchemy()
bcrypt = Bcrypt()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')

    CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})
        
    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)

    # Import blueprints
    from auth.routes import auth_bp
    app.register_blueprint(auth_bp, url_prefix='/auth')

    return app
