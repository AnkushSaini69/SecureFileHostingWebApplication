# Secure File Hosting Web Application

This project is a secure web application that allows users to register, log in, upload files, download files, delete their files, and share private files using a generated link. All data is dynamically stored and retrieved from a MongoDB database.

---

## Features

- User Registration & Login with JWT Authentication
- Secure Password Hashing using bcrypt
- Upload PDF and MP4 files (Max size: 20MB)
- Public and Private File Support
- Private Files Accessible Only Through Unique Shareable Link
- Users Can View, Download, or Delete Only Their Files
- Dynamic My Files and Public Downloads pages
- MongoDB Database for User Accounts and File Metadata
- Frontend built using HTML, CSS, and JavaScript

---

## Technologies Used

- **Node.js + Express.js** (Backend)
- **MongoDB + Mongoose** (Database)
- **HTML + CSS + JavaScript (No Framework)** (Frontend)
- **Multer** for file uploads
- **JWT** for authentication

---

## Project Folder Structure

SecureFileHostingWebApplication
│
├── backend
│ ├── config
│ ├── controllers
│ ├── middleware
│ ├── models
│ ├── routes
│ ├── uploads
│ ├── server.js
│ └── .env 
│
└── frontend
├── css
├── js
├── index.html
├── register.html
├── upload.html
├── myfiles.html
└── downloads.html

## Setup Instructions (How to Run)

### 1️⃣ Install Dependencies

Open terminal in backend folder:
cd backend
npm install

Create `.env` inside backend folder:

MONGO_URI=your_mongodb_uri_here
JWT_SECRET=your_secret_here

### 2️⃣ Start Backend Server

npm start

yaml
Copy code

### 3️⃣ Run Frontend

Open `index.html` using **Live Server** Extension in VS Code.

---

## Demo Actions Required

- Register New User
- Login
- Upload PDF or MP4 File
- View in My Files
- Download / Share / Delete
- View Public Files
- Logout (close tab)

---

## Notes

- `.env` file must not be uploaded publicly.
- Upload folder is automatically created for storing files.

---

