from fastapi import FastAPI, Depends, status
from sqlalchemy.orm import Session
from app.api.core.database import get_db, engine, Base
from contextlib import asynccontextmanager
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer
from typing import Annotated
from ..models.user import User






