import annotated_doc
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
from ..schemas.user import UserResponse, UserCreate
from ..services.auth_service import create_user, login_user

router = APIRouter(prefix="/auth", tags=["authentication"])

@router.post("/login", response_model = Token)
def login_for_token(form_data: Annotated[OAuth2PasswordRequestForm, Depends()], db: Annotated[Session, Depends(get_db)]):
        token = login_user(form_data=form_data, db=db)
        return token
        
@router.post("/signup", response_model=UserResponse)
def sign_up(form_data: UserCreate, db: Annotated[Session, Depends(get_db)]):
    user_create = create_user(form_data=form_data, db=db)
    
    return user_create