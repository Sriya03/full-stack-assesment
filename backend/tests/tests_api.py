from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)
print("This is a test file being executed")
def test_read_companies():
    response = client.get("/companies")
    assert response.status_code == 200
    assert len(response.json()) > 0  # Ensuring data is returned

def test_read_company_details():
    response = client.get("/companies/1")
    assert response.status_code == 200
    assert response.json()['company_id'] == 1

def test_read_company_locations():
    response = client.get("/companies/1/locations")
    assert response.status_code == 200
    assert len(response.json()) > 0  # Ensuring location data is returned