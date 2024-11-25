from __init__ import db

class User(db.Model):
    __tablename__ = 'users'  # Explicitly specify the table name
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)

    def __repr__(self):
        return f"<User {self.email}>"


# psql postgresql://churn_v1g3_user:1CwnghVEArDqyNyu6q4gkuzQfmq5A0XZ@dpg-csngl9hu0jms738q5cjg-a.oregon-postgres.render.com:5432/churn_v1g3
