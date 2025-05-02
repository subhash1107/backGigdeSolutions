
# Task Manager Backend

This is the backend server for the Task Manager application, built using **Node.js**, **Express**, and **MongoDB**.

It provides REST APIs to manage users, projects, and tasks with proper authentication and authorization.

---

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose)
- **JWT Authentication**
- **bcrypt.js** for password hashing
- **dotenv** for environment variables
- **CORS** handling
- **Morgan** for request logging (optional)

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/subhash1107/backGigdeSolutions.git
cd backGigdeSolutions
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

> Make sure to replace placeholders with your actual MongoDB URI and a strong JWT secret key.

### 4. Run the server

- For development with auto-restart:

```bash
npm run dev
```

- For production:

```bash
npm start
```

Server will start on **http://localhost:5000**

---

## API Endpoints

### Authentication
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login user and get JWT token

### Projects
- `POST /api/projects/` — Create a new project
- `GET /api/projects/` — Get all projects for the authenticated user
- `PUT /api/projects/:projectId` — Update a project
- `DELETE /api/projects/:projectId` — Delete a project

### Tasks (inside Projects)
- `POST /api/projects/:projectId/tasks` — Add a task to a project
- `PUT /api/projects/:projectId/tasks/:taskId` — Update a task
- `DELETE /api/projects/:projectId/tasks/:taskId` — Delete a task

---

## Folder Structure

```
backGigdeSolutions/
│
├── controllers/    # Business logic for auth, project, and task operations
├── middleware/     # Middleware functions (auth, error handling)
├── models/         # Mongoose models (User, Project, Task)
├── routes/         # API route handlers
├── utils/          # Utility functions (token generation, etc.)
├── .env            # Environment variables
├── server.js       # Entry point of the application
└── package.json    # NPM configuration
```

---

## Features

- User registration and login with secure password hashing.
- JWT-based authentication for protected routes.
- Projects creation and management.
- Task creation, editing, and deletion under projects.
- Proper error handling and status codes.
- Scalable and modular folder structure.

---

## Important Notes

- Make sure MongoDB is running locally or remotely.
- Protected routes require an Authorization header with a valid JWT token.
- CORS is enabled to allow the frontend to communicate with the backend.

---

## License

This project is open-source and available for educational and personal use.

---
