from fastapi import FastAPI, Depends, status, APIRouter, HTTPException
from sqlalchemy.orm import Session
from app.api.core.database import get_db
from fastapi.responses import JSONResponse
from typing import Annotated, List
from ..models.user import User
from ..schemas.note import NoteRequest, NoteResponse, NoteUpdate
from app.deps import get_current_user
from ..services.board_service import create_new_note, get_board_note, update_note


router = APIRouter(prefix="/boards", tags=["boards"])

@router.post("/{board_id}/create_note", response_model=NoteResponse, status_code = status.HTTP_201_CREATED)
def create_note(board_id: int, note: NoteRequest, current_user: Annotated[User, Depends(get_current_user)], db: Annotated[Session, Depends(get_db)]):
    new_note = create_new_note(board_id, current_user.id, db, note) 
    return new_note

@router.get("/get_note", response_model=List[NoteResponse], status_code = status.HTTP_200_OK)
def get_note(boardId: int, current_user: Annotated[User, Depends(get_current_user)], db: Annotated[Session, Depends(get_db)]):
    notes = get_board_note(boardId, current_user, db)
    return notes

@router.patch("/update_note/{noteId}", response_model=NoteResponse, status_code = status.HTTP_200_OK)
def update_note(noteId: int, note: NoteUpdate, current_user: Annotated[User, Depends(get_current_user)], db: Annotated[Session, Depends(get_db)]):
    updated_note = update_note(noteId, note, current_user.id, db)
    return updated_note

