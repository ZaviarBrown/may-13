"""Update column names

Revision ID: 85123a086b57
Revises: 339bd1f1b8eb
Create Date: 2024-09-12 11:50:37.442478

"""

import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "85123a086b57"
down_revision = "339bd1f1b8eb"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column("tweets", "likes", new_column_name="num_likes")

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column("tweets", "num_likes", new_column_name="likes")

    # ### end Alembic commands ###
