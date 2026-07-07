from fastapi import FastAPI, Depends, status
from sqlalchemy.orm import Session
from app.api.core.database import get_db, engine, Base
from contextlib import asynccontextmanager
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer
from typing import Annotated

from .api.models.user import User


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


@asynccontextmanager  
async def lifespan(app: FastAPI):
    yield
    print("Database closed!")

app = FastAPI(title="WallBoard Collaborative API", lifespan = lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/health")
def health_check(db: Annotated[Session, Depends(get_db)], token: Annotated[str, Depends(oauth2_scheme)] = None):
    # If this completes without raising an exception, your session maker works!
    return JSONResponse(content={"status": "healthy", "database": "connected"}, status_code=status.HTTP_200_OK)