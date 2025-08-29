# 🌍 Travel App

A full-stack Travel App that allows users to discover, plan, and book tours. Users can register, log in, view tours, and create new ones. This project includes both backend (Node.js, Express, MongoDB) and frontend (React).

---

## 📌 Features

- 🔐 User Authentication (JWT-based)
- 🗺️ View All Tours
- ✏️ Create New Tour (Protected)
- ⚙️ Protected Routes using Middleware
- 📦 RESTful API (Express)
- 📁 MongoDB (via MongoDB Atlas)
- ⚛️ React Frontend with Routing
- 🌐 CORS and .env Config Support

---

## 🛠️ Tech Stack

**Frontend:**
- React
- React Router
- Fetch API / Axios (optional)

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for Auth
- bcryptjs for Password Hashing

---

## 📂 Folder Structure

📂 Folder Structure
Backend (/server)
/server
│
├── config/              # DB & config setup
│   └── db.js
│
├── controllers/         # Controller logic
│   └── authController.js
│   └── tourController.js
│
├── middleware/          # Middleware (auth, error handling)
│   └── authMiddleware.js
│
├── models/              # Mongoose schemas
│   └── User.js
│   └── Tour.js
│
├── routes/              # Express routes
│   └── authRoutes.js
│   └── tourRoutes.js
│
├── utils/               # Utility functions
│   └── generateToken.js
│
├── .env                 # Environment variables
├── server.js            # App entry point
└── package.json

Frontend (/client)
/client
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   └── Header.js
│   │   └── TourCard.js
│
│   ├── pages/
│   │   └── Home.js
│   │   └── Login.js
│   │   └── Register.js
│   │   └── CreateTour.js
│   │   └── TourDetails.js
│
│   ├── context/
│   │   └── AuthContext.js
│
│   ├── services/
│   │   └── api.js
│
│   ├── App.js
│   ├── index.js
│   └── styles/
│       └── App.css
│
├── .env
└── package.json
🚀 Getting Started
1. Clone the Repository
git clone https://github.com/yourusername/travel-app.git
cd travel-app

2. Install Dependencies
Backend
cd server
npm install

Frontend
cd ../client
npm install

3. Set Up Environment Variables

Create .env files in both the server and client folders.

.env for Backend
PORT=5000
MONGO_URI=your_mongodb_atlas_connection
JWT_SECRET=your_jwt_secret

.env for Frontend
REACT_APP_API_URL=http://localhost:5000/api

4. Run the App
Start Backend
cd server
npm start

Start Frontend
cd client
npm start
🔐 API Endpoints
Auth Routes

POST /api/auth/register — Register a new user

POST /api/auth/login — Log in and get JWT

Tour Routes

GET /api/tours — Get all tours

GET /api/tours/:id — Get single tour

POST /api/tours — Create a new tour (Protected)

💬 Contact

For questions or support, contact: tulluricharitha@gmail.com
