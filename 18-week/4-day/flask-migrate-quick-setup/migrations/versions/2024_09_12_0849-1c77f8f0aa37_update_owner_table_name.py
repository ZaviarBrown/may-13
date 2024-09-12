"""Update owner table name

Revision ID: 1c77f8f0aa37
Revises: f13ce637980e
Create Date: 2024-09-12 08:49:57.555615

"""

import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "1c77f8f0aa37"
down_revision = "f13ce637980e"
branch_labels = None
depends_on = None


def upgrade():
    print("Alembic pog")
    # ### commands auto generated by Alembic - please adjust! ###
    op.rename_table("owners", "all_owners")
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.rename_table("all_owners", "owners")
    # ### end Alembic commands ###
