from sqlalchemy import Column, DateTime, Integer, String, Boolean, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from ..core.database import Base

class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True, nullable=False)
    hashed_password = Column(String, index=True, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    is_admin = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default = func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    
    notes = relationship("Note", back_populates="owner", cascade="all, delete_orphan")