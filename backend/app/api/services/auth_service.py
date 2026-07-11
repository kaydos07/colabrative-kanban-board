from fastapi import FastAPI, Depends, status, HTTPException
from sqlalchemy.orm import Session
from app.api.core.database import get_db, engine, Base
from contextlib import asynccontextmanager
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer
from typing import Annotated
from ..schemas.user import UserCreate
from ..models.user import User
from ..core.security import hased_password



def create_user(form_data: UserCreate, db: Session): 
    existing_username = db.query(User).filter(User.username == form_data.username).first()
    if existing_username:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Username already registered")
    existing_email = db.query(User).filter(User.email == form_data.email).first()
    if existing_email:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered")
    db_user = User(
        username = form_data.username,
        hashed_password = hased_password(form_data.password),
        email = form_data.email
    )
    db.add(db_user)
    db.commit()
    return db_user
    