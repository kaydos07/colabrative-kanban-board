from fastapi import FastAPI, Depends, status
from sqlalchemy.orm import Session
from app.api.core.database import get_db, engine, Base
from contextlib import asynccontextmanager
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware


@asynccontextmanager  
async def lifespan(app: FastAPI):
    try:
        # Attempt to open a quick connection block to test credentials
        with engine.connect() as connection:
            print("==========================================")
            print("🚀 DATABASE STATUS: Connected successfully!")
            print("==========================================")
    except Exception as e:
        print("==========================================")
        print("❌ DATABASE STATUS: Connection Failed!")
        print(f"Error Details: {e}")
        print("==========================================")
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
def health_check(db: Session = Depends(get_db)):
    # If this completes without raising an exception, your session maker works!
    return JSONResponse(content={"status": "healthy", "database": "connected"}, status_code=status.HTTP_200_OK)