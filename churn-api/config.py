import os

class Config:
    SQLALCHEMY_DATABASE_URI = 'postgresql://churn_v1g3_user:1CwnghVEArDqyNyu6q4gkuzQfmq5A0XZ@dpg-csngl9hu0jms738q5cjg-a.oregon-postgres.render.com:5432/churn_v1g3'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.getenv('SECRET_KEY', 'your_secret_key')
