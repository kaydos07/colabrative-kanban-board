from sqlalchemy import Column, Integer, ForeignKey, Table
from app.api.core.database import Base

board_members = Table(
    "board_members",
    Base.metadata,
    Column("board_id", Integer ,  ForeignKey("boards.id", ondelete="CASCADE"), primary_key=True),
    Column("user_id", Integer, ForeignKey("user.id", ondelete="CASCADE"), primary_key=True)
)