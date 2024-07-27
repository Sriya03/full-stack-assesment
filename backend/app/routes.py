from fastapi import APIRouter, HTTPException
import pandas as pd
from .models import Company, Location
import os
base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
try:
    companies_path = os.path.join(base_dir, 'data', 'companies.csv')
    companies_df = pd.read_csv(companies_path)
    locations_path = os.path.join(base_dir, 'data', 'locations.csv')
    locations_df = pd.read_csv(locations_path)
except Exception as e:
    print(f"Failed to load data: {e}")


router = APIRouter()

@router.get("/companies", response_model=list[Company])
def read_companies():
    return companies_df.to_dict(orient="records")

@router.get("/companies/{company_id}", response_model=Company)
def read_company(company_id: int):
    company = companies_df[companies_df['company_id'] == company_id]
    if company.empty:
        raise HTTPException(status_code=404, detail="Company not found")
    return company.iloc[0].to_dict()

@router.get("/companies/{company_id}/locations", response_model=list[Location])
def read_locations(company_id: int):
    locations = locations_df[locations_df['company_id'] == company_id]
    if locations.empty:
        raise HTTPException(status_code=404, detail="Locations not found")
    return locations.to_dict(orient="records")
