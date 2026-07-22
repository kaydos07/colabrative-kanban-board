from sqlalchemy import Column, DateTime, Integer, String, Boolean, ForeignKey, null
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import JSONB
from ..core.database import Base
from .board_members import board_members


class DrawLine(Base):
    __tablename__ = "drawlines"
    
    id = Column(Integer, primary_key=True, index=True)
    vector = Column(JSONB, nullable=False, default={})
    style = Column(JSONB, nullable=False, default={"color": "#000000", "StrokeWidth": 1})
    created_at = Column(DateTime(timezone=True), server_default = func.now())
    
    board_id = Column(Integer, ForeignKey("boards.id", ondelete="CASCADE"), nullable=False)
    
    board = relationship("Board", back_populates="drawlines")
    
    
    