from fastapi import FastAPI, Depends, status
from app.api.core.database import get_db, engine, Base
from jose import JWTError, jwt
from datetime import datetime, timedelta
from passlib.context import CryptContext
from fastapi.responses import JSONResponse
from .config import settings
from fastapi.security import OAuth2PasswordBearer
from typing import Annotated
from ..models.user import User

brycpt_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hased_password(password: str):
    return brycpt_context.hash(password)

def verify_password(plain_password, hashed_password):
    return brycpt_context.verify(plain_password, hashed_password)

def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(datetime.timezone.utc) + expires_delta
    else:
        expire = datetime.now(datetime.timezone.utc) + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return encoded_jwt