from sqlalchemy.orm import Session
from ..models import User, Note, Board
from ..schemas.note import NoteResponse, NoteUpdate
from fastapi import HTTPException, status



def create_new_note(board_id: int, user_id: int,  db: Session, note: NoteResponse):
    new_note = Note(
        title = note.title,
        content = note.content,
        progress = note.progress,
        is_done = note.is_done,
        position = note.position.model_dump() if note.position else {"x": 0, "y": 0},
        user_id = user_id,
        board_id = board_id,
    )
    
    db.add(new_note)
    db.commit()
    db.refresh(new_note)
    return new_note

def get_board_note(board_id: int, user: User, db: Session):
    board = db.query(Board).filter(board_id == Board.id).first()
    
    if not board: 
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Board not found")
    if user not in board.members and user.id != board.owner_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="You are not a member of this board")
    
    return board.notes
        
def update_note(note_id: int, note: NoteUpdate, user: User, db: Session):
    exist_note = db.query(Note).filter(Note.id == note_id).first()
    
    if not exist_note:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="note not found") 
    if user not in note.board.members and user.id != note.board.owner_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="You are not allowed to change this note")
    
    update_data = note.model_dump(exclude_unset=True)
    
    if "position" in update_data and update_data["position"] is not None:
        exist_note["position"] = note.position.model_dump()
    
    for key, value in update_data.items():
        setattr(exist_note, key, value)
    
    db.commit(exist_note)
    db.commit(exist_note)
    return exist_note
    
    