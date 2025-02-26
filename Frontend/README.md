Uber Clone - Frontend

🚀 Project Overview

This is the frontend of an Uber-like ride-sharing platform built using React and Tailwind CSS. It provides authentication for both Users and Captains (Drivers) and includes a homepage to get started.

📌 Features

User Authentication

User Signup & Login

Captain (Driver) Signup & Login

Navigation

Homepage with a "Get Started" button

Routing using React Router

State Management

Context API for user state

Responsive UI

Styled with Tailwind CSS for a modern look

🛠 Tech Stack

Frontend: React, React Router, Tailwind CSS, Vite

State Management: Context API (UserContext)

📁 Folder Structure

Uber-Clone/
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── UserSignup.jsx
│   │   ├── UserLogin.jsx
│   │   ├── CaptainSignup.jsx
│   │   ├── CaptainLogin.jsx
│   ├── context/
│   │   ├── UserContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── public/
├── vite.config.js
├── package.json
├── README.md

🏗 Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/Sidharthavyas/Uber-Clone.git
cd Uber-Clone

2️⃣ Install Dependencies

npm install

3️⃣ Start the Development Server

npm run dev

🎯 Usage

Home Page: Click "Get Started" to navigate.

User Login/Signup: Register as a rider.

Captain Login/Signup: Register as a driver.

⚡ Setting Up Vite (If Needed)

If Vite is not already set up, you can install it manually:

npm create vite@latest my-app --template react

Then, move into your project folder and install dependencies:

cd my-app
npm install

Start the development server:

npm run dev

🤝 Contributing

If you'd like to contribute, feel free to fork this repository and submit a pull request.