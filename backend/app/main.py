# app/main.py
from fastapi import FastAPI
from .routes import router
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI(
    title="Company Locations API",
    description="API for managing companies and their locations",
    version="1.0.0"
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

# Include the router
app.include_router(router)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust in production
    allow_methods=["*"],
    allow_headers=["*"],
)
