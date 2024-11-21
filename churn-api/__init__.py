from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_cors import CORS

db = SQLAlchemy()
bcrypt = Bcrypt()
jwt = JWTManager()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')
    
    # Enable CORS
    CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

    # Initialize extensions
    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)
    migrate.init_app(app, db)

    # Register authentication blueprint
    from auth.routes import auth_bp
    app.register_blueprint(auth_bp, url_prefix='/auth')

    # Register visualization blueprint
    from visualizations.routes import visualizations_bp
    app.register_blueprint(visualizations_bp, url_prefix='/api')

    # Register prediction blueprint
    from prediction.routes import prediction_bp
    app.register_blueprint(prediction_bp, url_prefix='/api')

    return app
