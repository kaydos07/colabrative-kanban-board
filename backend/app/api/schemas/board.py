from pydantic import BaseModel, Field, EmailStr
from datetime import datetime
class BoardBase(BaseModel):
    id: int
    title: str
    created_at: datetime
    owner_id: int

    model_config = {"from_attributes": True}
    
class BoardResponse(BaseModel):
    id: int
    title: str
    owner_id: int 
    
    model_config = {"from_attributes": True}

class BoardRequest(BaseModel):
    id: int

    model_config = {"from_attributes": True}
    
class BoardUpdate(BaseModel):
    title: str | None = None

    model_config = {"from_attributes": True}
    
class BoardCreate(BaseModel): 
    id: int 
    
    model_config = {"from_attributes": True}