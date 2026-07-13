from email import header

from fastapi import FastAPI, Depends, status, APIRouter, HTTPException
from fastapi.datastructures import FormData
from sqlalchemy.orm import Session
from app.api.core.database import get_db, engine, Base
from contextlib import asynccontextmanager
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from typing import Annotated
from ..schemas.auth import Token
from ..models.user import User
from ..schemas.user import UserBase
from app.deps import get_current_user

router = APIRouter(prefix="/users", tags=["user"])

@router.get("/me", response_model=UserBase)
def current_user(current_user: Annotated[User, Depends(get_current_user)]):
    return current_user
