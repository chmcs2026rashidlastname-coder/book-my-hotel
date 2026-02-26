🏨 Book My Hotel

A full-stack Hotel Management & Booking style web application built using React, Node.js, Express, MongoDB, Tailwind CSS, and DaisyUI.

This project allows users to add, view, edit, search, and delete hotels with a clean and responsive modern UI.

🚀 Project Overview

Book My Hotel is a CRUD-based hotel listing platform where users can:

Add new hotels

View hotel details

Edit hotel information

Delete hotels with confirmation modal

Search hotels by name

Filter by location and category

Experience a fully responsive UI

This project demonstrates full-stack development skills including frontend design, backend API development, database management, and responsive UI design.

🛠 Tech Stack
🔹 Frontend

React (Vite)

React Router DOM

Tailwind CSS

DaisyUI

Lucide Icons

React Hot Toast

🔹 Backend

Node.js

Express.js

MongoDB (Mongoose)

✨ Features
🏠 Home Page

Attractive hero section

Search by hotel name

Filter by location

Filter by category

Responsive hotel grid layout

Animated hover effects

Tooltips on action icons



🏨 Hotel Details Page

Large hero image

Category badge

Location display

Price highlight

Edit & navigation options

Modern layout design

➕ Add Hotel

Clean form design

Category dropdown

Multiple image support

Success & error toast messages

✏ Edit Hotel

Pre-filled form with existing data

Update functionality

User feedback notifications

🗑 Delete Hotel

Attractive confirmation modal

Blur background effect

Safe delete confirmation

📱 Responsive Design

Works on:

Mobile

Tablet

Laptop

Large screens

Fluid layout

Zoom-safe UI

📂 Project Structure
Book-My-Hotel/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── tailwind.config.js
│
└── README.md
⚙ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/book-my-hotel.git
cd book-my-hotel
2️⃣ Setup Backend
cd backend
npm install

Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string

Run backend:

npm run dev

Backend runs on:

http://localhost:5000
3️⃣ Setup Frontend
cd frontend
npm install
npm run dev

Frontend runs on:

http://localhost:5173
🔗 API Endpoints
Method	Endpoint	Description
GET	/hotels	Get all hotels
GET	/hotels/:id	Get single hotel
POST	/hotels	Add new hotel
PUT	/hotels/:id	Update hotel
DELETE	/hotels/:id	Delete hotel
🎨 UI Highlights

Gradient hero section

Glass-style search container

Animated hover cards

Custom tooltips

Styled delete confirmation modal

Modern spacing & typography

📸 Sample Data Format
{
  "title": "Taj Palace",
  "description": "Luxury hotel with premium services",
  "price": 5000,
  "location": "Mumbai",
  "category": "Luxury",
  "images": ["image_url_here"]
}
📌 Future Improvements

⭐ Add rating system

🛏 Booking functionality

👤 User authentication

🌙 Dark mode toggle

📸 Image carousel

❤️ Favorite hotels feature

👨‍💻 Author

Rashid Khan
BSc Computer Science Student
Frontend & Full Stack Developer

📄 License

This project is created for educational purposes.