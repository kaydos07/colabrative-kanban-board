from sqlalchemy import Column, DateTime, Integer, String, Boolean, ForeignKey, null
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import JSONB
from ..core.database import Base
from .board_members import board_members


class Board(Base):
    __tablename__ = "boards"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default = func.now())
    
    owner_id = Column(Integer, ForeignKey("user.id", ondelete="CASCADE"), nullable=False)
    
    drawlines = relationship("DrawLine", back_populates="board", cascade="all, delete-orphan")
    owner = relationship("User", back_populates="boards")
    members = relationship("User", secondary=board_members, back_populates="boards")
    notes = relationship("Note", back_populates="board", cascade="all, delete-orphan")
    
    