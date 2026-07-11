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
from ..core.security import hased_password, verify_password, create_access_token
from ..services.auth_service import create_user

router = APIRouter(prefix="/auth", tags=["authentication"])

@router.post("/login", response_model = Token)
def login_for_token(form_data: Annotated[OAuth2PasswordRequestForm, Depends()], db: Annotated[Session, Depends(get_db)]):
        user = db.query(User).filter(User.username == form_data.username).first()
        if not user: 
            raise HTTPException(status_code=400, detail="Incorrect username or password")
        if not verify_password(FormData.password, user.hashed_password):
            raise HTTPException(status_code=400, detail="Incorrect username or password")
        token = create_access_token(data={"sub": {user.username}})  
        
        
@router.post("/signup", response_model=UserResponse)
def sign_up(form_data: UserCreate, db: Annotated[Session, Depends(get_db)]):
    user_create = create_user(form_data=form_data, db=db)
    
    return user_create