# MERN Project Template

A modern full-stack application template using the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- React frontend with Vite
- Express.js backend
- MongoDB integration
- Modern development setup
- Concurrent development servers

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/i83992473/project-template-mern.git
cd project-template-mern
```

2. Install all dependencies (client, server, and root):
```bash
npm run install-all
```

3. Set up environment variables:
   - Copy `server/.env.example` to `server/.env`
   - Update the environment variables as needed

### Development

To start both the frontend and backend development servers with a single command:
```bash
npm start
```

This will start:
- Frontend development server (default: http://localhost:5173)
- Backend development server (default: http://localhost:5000)

### Available Scripts

- `npm start` - Start both frontend and backend development servers
- `npm run client` - Start only the frontend development server
- `npm run server` - Start only the backend development server
- `npm run build` - Build the frontend for production
- `npm run install-all` - Install dependencies for root, client, and server

## Project Structure

```
mern-app/
├── client/             # React frontend
│   ├── public/         # Static files
│   └── src/           # Source files
├── server/            # Express backend
│   ├── config/        # Configuration files
│   ├── controllers/   # Route controllers
│   ├── models/        # Database models
│   └── routes/        # API routes
└── package.json       # Root package.json for concurrent running
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License. 