# Full-Stack Application: Company and Locations Management

## Project Overview

This project is a full-stack web application designed to manage and display information about companies and their locations. It features a FastAPI backend and a React frontend.

## Prerequisites

Before starting, ensure you have the following installed:
- Python 3.9 or higher
- Node.js 16 or higher
- Docker
- Docker Compose

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Step 1: Clone the Repository

```bash
git clone git@github.com:Sriya03/full-stack-assesment.git
cd full-stack-assesment
```

### Step 2: Start the Backend and Frontend

Navigate to the project's root directory and run:
```bash
docker-compose up --build
```

This command builds and starts both the backend and frontend containers. If you encounter issues, refer to the Troubleshooting section below.

### API Documentation
Access the auto-generated interactive API documentation by navigating to:
```bash
http://localhost:8000/docs
```

This Swagger UI allows you to execute API calls directly from your browser and view the schema of the expected requests and responses.

### Frontend Access
Access the frontend at:
```bash
http://localhost:3000
```

Visit this URL in your web browser to interact with the React application.

### Troubleshooting Common Issues
Docker Compose Version Warning: Ensure your docker-compose.yml file does not specify a version or is updated to be compatible with your Docker Compose version.
API Connection Errors: Check that the backend server is running correctly and is accessible. Verify network settings and ensure no firewall or network configurations are blocking the connections.
CSV File Loading Errors: Make sure the CSV files exist in the correct directory and that paths in the backend code correctly point to these files.
Docker Internal Server Errors: Try restarting Docker and ensuring your Docker Desktop (if used) is up to date. Reinstalling Docker may be necessary if problems persist.