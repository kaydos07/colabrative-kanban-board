from pydantic import BaseModel, Field, EmailStr
from typing import List, Dict, Any

    
class DrawLinePoint(BaseModel):
    x: float
    y: float

    model_config = {"from_attributes": True}

class DrawLineCreate(BaseModel):
    point: List[DrawLinePoint]
    style: Dict[str, Any] = {"color": "#000000", "strokeWidth": 3}
    
    model_config = {"from_attributes": True}
    
class DrawLineResponse(DrawLineCreate):
    id: int
    
    model_config = {"from_attributes": True}