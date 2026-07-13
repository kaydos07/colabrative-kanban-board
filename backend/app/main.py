from fastapi import FastAPI,status
from sqlalchemy.orm import Session
from contextlib import asynccontextmanager
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.auth import router as auth_router
from app.api.v1.users import router as user_router


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

app.include_router(auth_router, prefix="/api/v1")
app.include_router(user_router, prefix="/api/v1")

@app.get("/")
def health_check():
    return JSONResponse(content={"status": "healthy", "database": "connected"}, status_code=status.HTTP_200_OK)