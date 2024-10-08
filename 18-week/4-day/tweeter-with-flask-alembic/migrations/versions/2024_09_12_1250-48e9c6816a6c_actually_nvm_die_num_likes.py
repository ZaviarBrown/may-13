"""Actually nvm die num_likes

Revision ID: 48e9c6816a6c
Revises: 85123a086b57
Create Date: 2024-09-12 12:50:00.970362

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '48e9c6816a6c'
down_revision = '85123a086b57'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('tweets', schema=None) as batch_op:
        batch_op.drop_column('num_likes')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('tweets', schema=None) as batch_op:
        batch_op.add_column(sa.Column('num_likes', sa.INTEGER(), nullable=True))

    # ### end Alembic commands ###
