from sqlalchemy.orm import Session
from ..models import User, Note
from ..schemas.user import UserBase
from ..schemas.note import NoteRequest, NoteResponse

def create_new_note(userId: int, db: Session, note: NoteRequest):
    new_note = Note(
        title = note.title,
        content = note.content,
        progress = note.progress,
        user_id = userId
    )
    
    db.add(new_note)
    db.commit()
    return new_note