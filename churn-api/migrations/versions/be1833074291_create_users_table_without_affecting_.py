"""Create users table without affecting customer_data

Revision ID: be1833074291
Revises: 
Create Date: 2024-11-18 20:36:21.699319

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'be1833074291'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### Create the users table ###
    op.create_table(
        'users',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('email', sa.String(120), nullable=False, unique=True),
        sa.Column('password_hash', sa.String(128), nullable=False)
    )
    # Ensure no operation affects customer_data


def downgrade():
    # ### Drop the users table ###
    op.drop_table('users')
    # No changes to customer_data as this table is unaffected
