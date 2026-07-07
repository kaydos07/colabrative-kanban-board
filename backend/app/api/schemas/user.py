from pydantic import BaseModel, Field, EmailStr


class UserBase(BaseModel):
    username: str
    email: EmailStr
    is_admin: bool = False

    model_config = {"from_attributes": True}

class UserResponse(UserBase):
    pass

class UserCreate(UserBase):
    password: str

class UserUpdate(BaseModel):
    username: str | None = None
    email: EmailStr | None = None

    model_config = {"from_attributes": True}

class UserChangePassword(BaseModel):
    old_password: str
    new_password: str

    model_config = {"from_attributes": True}

    