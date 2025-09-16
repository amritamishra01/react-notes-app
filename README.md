# 📝 React Notes App

A **multi-tenant Notes App** built with **MERN stack** (MongoDB, Express, React, Node.js).  
The app supports **user authentication, multi-tenancy, role-based access (Admin & Member)**, and CRUD operations on notes.

---

## 🚀 Features
- 🔐 **JWT Authentication** (Login / Register users)
- 👥 **Multi-Tenant Support** (Each company/tenant has separate users & notes)
- 🛡 **Role-based Access Control**
  - Admin → Manage users & notes for tenant
  - Member → Manage only their notes
- 🗒 **CRUD Notes** (Create, Read, Update, Delete)
- 🎨 **Frontend in React + Redux**
- 🌍 **Backend in Node.js + Express + MongoDB**

---

## 🛠 Tech Stack
### Frontend
- React
- Redux
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt (for password hashing)

---

## 📂 Project Structure
react-notes-app/
│
├── notes-frontend/ # React frontend
│ ├── src/
│ ├── public/
│ └── package.json
│
├── notes-backend/ # Node.js + Express backend
│ ├── routes/
│ ├── models/
│ ├── seed/ # Seed users & tenants
│ └── server.js
│
└── README.md


## ⚡ Setup Instructions

### 🔹 1. Clone the Repository
```bash
git clone https://github.com/amritamishra01/react-notes-app.git
cd react-notes-app

2. Backend Setup
cd notes-backend
npm install
.env
PORT=5000
mongoURL=your_mongodb_connection_string
to run :
node seed/seed.js
node index.js

✅ Server will run on http://localhost:5000

🔹 3. Frontend Setup

Open a new terminal and go inside frontend:

cd notes-frontend


Install dependencies:

npm install


Start frontend:

npm start
✅ React frontend will run on http://localhost:3000

🔑 Test Users (Seeded Accounts)

You can log in with these seeded users:

Role	Email	Password
Admin	admin@acme.test
	password
Member	member1@acme.test
	password
Admin	admin@globex.test
	password
Member	member1@globex.test
	password
🌐 API Endpoints (Backend)
Auth

POST /user/register → Register new user

POST /user/login → Login and get JWT

Notes

GET /note/ → Get all notes (for tenant or user)

POST /note/create → Create note

PATCH /note/:id → Update note

DELETE /note/:id → Delete note

Tenants

POST /tenant/create → Create tenant

GET /tenant/ → Get tenants

🚀 Deployment

Frontend: Deploy on Netlify / Vercel

Backend: Deploy on Render / Railway / Heroku

Make sure to update frontend .env with backend API URL.

📸 Screenshots (Optional)

Add screenshots here for login, dashboard, notes page.

🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.

