from click import password_option
from pydantic import BaseModel, Field, EmailStr
from datetime import datetime


class UserBase(BaseModel):
    username: str
    email: EmailStr
    is_admin: bool = False

    model_config = {"from_attributes": True}

class UserResponse(UserBase):
    username: str
    email: EmailStr
    is_admin: bool = False
    created_at: datetime

    model_config = {"from_attributes": True}
class UserCreate(UserBase):
    username: str
    password: str
    email: EmailStr

    model_config = {"from_attributes": True}

class UserUpdate(BaseModel):
    username: str | None = None
    email: EmailStr | None = None

    model_config = {"from_attributes": True}

class UserChangePassword(BaseModel):
    old_password: str
    new_password: str

    model_config = {"from_attributes": True}

    