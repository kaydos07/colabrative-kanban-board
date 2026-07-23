from fastapi import FastAPI, Depends, status, APIRouter, HTTPException
from sqlalchemy.orm import Session
from app.api.core.database import get_db
from fastapi.responses import JSONResponse
from typing import Annotated
from ..models.user import User
from ..schemas.user import UserBase
from ..schemas.note import  NoteResponse
from app.deps import get_current_user
from ..services.board_service import create_new_note


router = APIRouter(prefix="/users", tags=["user"])

@router.get("/me", response_model=UserBase)
def current_user(current_user: Annotated[User, Depends(get_current_user)]):
    return current_user
