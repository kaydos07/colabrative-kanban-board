from pydantic import BaseModel, Field, EmailStr
from datetime import datetime

class NoteBase(BaseModel):
    title: str
    content: str
    progress: str
    is_done: bool = False
    

    model_config = {"from_attributes": True}
    
class NoteResponse(BaseModel):
    id: int
    title: str
    content: str
    progress: str
    is_done: bool = False
    

    model_config = {"from_attributes": True}

class NoteRequest(BaseModel):
    title: str
    content: str
    progress: str

    model_config = {"from_attributes": True}