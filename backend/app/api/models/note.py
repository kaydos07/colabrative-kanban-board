from sqlalchemy import Column, DateTime, Integer, String, Boolean, ForeignKey, null
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import JSONB
from ..core.database import Base

class Note(Base):
    __tablename__ = "notes"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    content = Column(String, nullable=True)
    progress = Column(String, nullable=False, default="To Do")
    position = Column(JSONB, nullable=False, default={"x": 0, "y": 0})
    is_done = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default = func.now())
    
    user_id = Column(Integer, ForeignKey("user.id", ondelete="CASCADE"), nullable=False)
    board_id = Column(Integer, ForeignKey("boards.id", ondelete="CASCADE"), nullable=False)
    
    owner = relationship("User", back_populates="notes")
    board = relationship("Board", back_populates="notes")