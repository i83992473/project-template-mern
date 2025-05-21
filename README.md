# MERN Stack Application

This is a full-stack MERN (MongoDB, Express.js, React, Node.js) application with Material UI integration.

## Project Structure
```
mern-app/
├── client/          # React frontend (Vite)
└── server/          # Node.js backend
```

## Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB Atlas account

## Setup Instructions

### 1. Project Initialization
```bash
# Create project directory
mkdir mern-app
cd mern-app
```

### 2. Frontend Setup (React + Vite)
```bash
# Create React frontend using Vite
npm create vite@latest client -- --template react
cd client

# Install frontend dependencies
npm install
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
npm install react-router-dom axios
```

### 3. Backend Setup
```bash
# Create and setup backend
cd ..
mkdir server
cd server
npm init -y

# Install backend dependencies
npm install express mongoose dotenv cors
npm install nodemon --save-dev
```

### 4. Configuration Files

#### Backend Configuration
Create a `server/.env` file with the following content:
```
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
PORT=5000
```

Update `server/package.json` to include these scripts:
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

### 5. Running the Application

#### Frontend
```bash
cd client
npm run dev
```
The frontend will be available at `http://localhost:5173`

#### Backend
```bash
cd server
npm run dev
```
The backend will be available at `http://localhost:5000`

## Development Notes

### Frontend Features
- React with Vite for fast development
- Material UI for modern, responsive design
- React Router for navigation
- Axios for API calls

### Backend Features
- Express.js server
- MongoDB Atlas cloud database
- CORS enabled
- Environment variables for configuration

## Troubleshooting

If you encounter npm installation issues:
1. Try running the terminal as administrator
2. Clear npm cache: `npm cache clean --force`
3. Delete node_modules folder and package-lock.json, then run `npm install` again
4. Alternatively, use yarn instead of npm

## Security Notes
- The `.env` file should be added to `.gitignore`
- Never commit sensitive credentials to version control
- Consider using environment variables for all sensitive data

## Next Steps
1. Set up basic Express server
2. Create MongoDB models
3. Implement API routes
4. Set up React components with Material UI
5. Implement frontend-backend communication 