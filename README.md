# 🚀 Project Management System (PMS)

A modern Full Stack **Project Management System** built with the **MERN Stack** that helps organizations manage users, projects, and team collaboration through a clean and responsive admin dashboard.

## ⭐ Key Highlights

- Full Stack MERN Application.
- JWT Authentication & Authorization.
- Role Based Access Control (Admin/User).
- Redux Toolkit State Management.
- Responsive Mobile-First Dashboard.
- RESTful API Design.
- Clean Folder Structure following industry practices.
- Reusable Components & Modular Architecture.
- Complete Postman API Collection included.
- Production-ready code with error handling and validation.
---

## 📌 Features

### 🔐 Authentication & Authorization
- JWT Authentication
- Secure Login
- Protected Routes
- Role-Based Access Control (RBAC)
- Admin & User Roles

### 👥 User Management
- Create User
- View Users
- Search Users
- Update User
- Delete User
- Role Management (Admin/User)

### 📂 Project Management
- Create Project
- View Project List
- Search Projects
- Update Project
- Delete Project
- Project Status Management
- Assign Team Members
- Project Details Page

### 📊 Dashboard
- Dashboard Statistics
- Total Users
- Total Projects
- Completed Projects
- Active Projects

### 🎨 Frontend Features
- Responsive Dashboard UI
- Mobile Friendly Sidebar
- Responsive Tables
- Modern SaaS Layout
- React Hook Form Validation
- Toast Notifications
- Loading States
- Confirmation Dialogs

---

# 🛠️ Tech Stack

## Frontend
- React.js (Vite)
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- React Hook Form
- Axios
- React Hot Toast
- Lucide React Icons

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- BcryptJS
- Multer (File Upload)
- Morgan
- Helmet
- Compression
- CORS

---

# 📁 Project Structure

```
project-management-system/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── utils/
│   ├── app.js
│   ├── server.js
│   └── seedAdmin.js
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── features/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   └── vite.config.js
│
└── README.md
```

---

# ⚙️ Installation Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Sandeepgupta078/project-management-system.git

cd project-management-system
```

---

## 2️⃣ Backend Setup

```bash
cd backend
npm install
```

### Create `.env`

Create a file named `.env` inside the `backend` folder.

```env
PORT=4000

NODE_ENV=development

MONGO_URI=mongodb://127.0.0.1:27017/project_management

JWT_SECRET=your_super_secret_key

JWT_EXPIRE=7d
```

### Run Backend

```bash
npm run dev
```

Backend will start at:

```
http://localhost:4000
```

---

## 3️⃣ Seed Admin User

Open another terminal:

```bash
cd backend
node seedAdmin.js
```

Default Admin Credentials:

| Field | Value |
|-------|---------|
| Email | admin@test.com |
| Password | Admin@123 |

---

## 4️⃣ Frontend Setup

```bash
cd frontend
npm install
```

Create `.env` inside `frontend`.

```env
VITE_API_URL=http://localhost:4000/api
```

Run frontend:

```bash
npm run dev
```

Frontend URL:

```
http://localhost:5173
```

---

# 🔑 Demo Credentials

## Admin

```
Email:
admin@test.com

Password:
Admin@123
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint | Description |
|----------|-------------------------|------------------|
| POST | `/api/auth/login` | Login |
| POST | `/api/auth/register` | Register User |
| GET | `/api/auth/me` | Logged-in User |

---

## Users

| Method | Endpoint | Description |
|----------|------------------------|--------------------|
| GET | `/api/users` | Get All Users |
| GET | `/api/users/:id` | Get Single User |
| PUT | `/api/users/:id` | Update User |
| PATCH | `/api/users/:id/role` | Change User Role |
| DELETE | `/api/users/:id` | Delete User |

---

## Projects

| Method | Endpoint | Description |
|----------|----------------------------|--------------------|
| GET | `/api/projects` | Get All Projects |
| POST | `/api/projects` | Create Project |
| GET | `/api/projects/:id` | Get Single Project |
| PUT | `/api/projects/:id` | Update Project |
| PATCH | `/api/projects/:id/status` | Update Project Status |
| DELETE | `/api/projects/:id` | Delete Project |

---

## Dashboard

| Method | Endpoint | Description |
|----------|----------------------------|----------------|
| GET | `/api/dashboard/stats` | Dashboard Statistics |

---

# 📸 Application Flow

```
Login
   │
   ▼
Dashboard
   │
   ├── User Management
   │      ├── List Users
   │      ├── Create User
   │      ├── Edit User
   │      └── Delete User
   │
   ├── Project Management
   │      ├── List Projects
   │      ├── Create Project
   │      ├── Update Project
   │      ├── Delete Project
   │      └── Update Status
   │
   └── Profile
```

---

# 🔒 Authentication Flow

```
User Login
     │
     ▼
POST /api/auth/login
     │
     ▼
JWT Token Generated
     │
     ▼
Token Stored in LocalStorage
     │
     ▼
Axios Interceptor Adds Token
     │
     ▼
Protected API Access
```

---

# 🎯 Design Decisions

- Clean Folder Structure.
- Redux Toolkit for predictable state management.
- Axios interceptors for centralized authentication.
- Role-based middleware for API security.
- Modular reusable components.
- Responsive UI for desktop, tablet, and mobile.
- Clean separation between API, Redux, and UI layers.

---

# 🚀 Future Improvements

- File Uploads for Projects
- Comments & Activity Logs
- Email Notifications
- Team Chat
- Dark Mode
- Drag & Drop Kanban Board
- Docker Deployment
- CI/CD Pipeline
- Unit & Integration Tests

---

# 👨‍💻 Author

**Name:** Sandeep Gupta

**Role:** Full Stack Developer

**Tech Stack:** MERN Stack (MongoDB, Express.js, React.js, Node.js)

**LinkedIn:** [linkedin.com/in/sandeepg75](https://linkedin.com/in/sandeepg75)

**GitHub:** [github.com/Sandeepgupta078](https://github.com/Sandeepgupta078)