from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Import your models below this line to ensure they are registered
from .user_model import User  # Example model
