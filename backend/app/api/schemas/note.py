from ast import List

from pydantic import BaseModel, Field, EmailStr
from datetime import datetime
from typing import Optional


class NotePosition(BaseModel): 
    x: float = 0
    y: float = 0
    
    model_config = {"from_attributes": True}
                    
class NoteBase(BaseModel):
    title: str
    content: str
    progress: str = "To Do"
    is_done: bool = False
    position: Optional[NotePosition] =  NotePosition()


    model_config = {"from_attributes": True}
    
class Create(NoteBase):
    boar_id: int    
    
    model_config = {"from_attributes": True}
    
class NoteUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    progress: Optional[str] = None
    is_done: Optional[bool] = None
    position: Optional[NotePosition] = None
    
    model_config = {"from_attributes": True}
    
class NoteResponse(NoteBase):
    id: int
    user_id: int
    board_id: int
    created_at: datetime
    

    model_config = {"from_attributes": True}

