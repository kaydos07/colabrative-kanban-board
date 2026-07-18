from sqlalchemy import Column, DateTime, Integer, String, Boolean, ForeignKey, null
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from ..core.database import Base

class Note(Base):
    __tablename__ = "notes"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    content = Column(String, nullable=True)
    progress = Column(String, nullable=False, default="To Do")
    is_done = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default = func.now())
    
    user_id = Column(Integer, ForeignKey("user.id", ondelete="CASCADE"), nullable=False)
    
    owner = relationship("User", back_populates="notes")