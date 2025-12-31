**_# WebSocketBasedNoteSharing-_**

This project implements a WebSocket-based real-time collaborative note-sharing application where multiple users can edit shared notes simultaneously. It demonstrates key principles of real-time web systems and provides a scalable base for future improvements.

**Introduction**

This project is a real-time collaborative note-sharing web application built using WebSockets. It allows multiple users to view and edit the same notes simultaneously, similar in core behavior to tools like Google Docs.
The project demonstrates the use of real-time client–server communication, multi-user synchronization, and modern frontend–backend separation using React and Node.js.

# 📌 Task-02: WebSocket-Based Collaborative Note-Sharing Application

A real-time collaborative note-taking web application developed as part of **Task-02 for the CODTECH Internship Program**.  
This project allows multiple users to write and edit notes simultaneously with **instant synchronization**, similar to Google Docs, using **WebSocket-based real-time communication**.

---

## 📖 Project Overview

This project demonstrates the implementation of a **real-time collaborative system** where multiple users can work on the same notes document at the same time. Any changes made by one user are immediately reflected across all connected users without requiring a page refresh.

The application follows a **client–server architecture**, with a React-based frontend and a Node.js WebSocket backend, ensuring scalability and modularity.

---

## 🎯 Objectives

- Build a collaborative note-taking tool
- Enable real-time multi-user editing
- Use WebSockets for live data synchronization
- Maintain a shared document state across users
- Understand real-time web application architecture

---

## 🛠️ Technology Stack

### Frontend
- React (Vite)
- JavaScript
- HTML5
- CSS3

### Backend
- Node.js
- WebSocket (`ws` library)

---

## 🧱 System Architecture

- Clients communicate with the server using persistent WebSocket connections.
- The server manages a shared document state and broadcasts updates to all connected users.

---

## 📂 Project Structure

collab-editor/
│
├── client/
│ └── collab-editor-client/
│ ├── index.html
│ ├── package.json
│ └── src/
│ ├── main.jsx # React entry point
│ ├── App.jsx # Main application component
│ ├── Editor.jsx # Collaborative text editor
│ └── socket.js # WebSocket client logic
│
├── server/
│ ├── index.js # WebSocket server
│ ├── documentStore.js # Shared in-memory document
│ └── package.json
│
├── .gitignore
└── README.md


---

## ✨ Features

- ✅ Real-time collaborative editing
- ✅ Multi-user support
- ✅ WebSocket-based communication
- ✅ Instant synchronization
- ✅ Clean and beginner-friendly UI
- ✅ Modular frontend and backend structure

---

## ⚙️ How It Works

1. The WebSocket server starts and listens for client connections.
2. Users open the web application in their browser.
3. Each client establishes a WebSocket connection to the server.
4. Users join a shared notes document.
5. When a user types:
   - The update is sent to the server.
   - The server updates the shared document.
   - The update is broadcast to all connected clients.
6. All users see the updated notes instantly.

---

## 🚀 How to Run the Project Locally

### Step 1: Clone the Repository

git clone https://github.com/Hanu175/WebSocketBasedNoteSharing-.git

### Step 2: Start the Backend

cd WebSocketBasedNoteSharing-/server
npm install
npm start

### Step 3: Start the Frontend

cd ../client/collab-editor-client
npm install
npm run dev

### Step 4: Open the Application

http://localhost:5173


### ⚠️ Current Limitations

Notes are stored in server memory (not persistent)
Notes reset when the server restarts
Only one shared document
Plain text editor (no rich formatting)
No user authentication

### 🔮 Future Enhancements

Database-based persistence (MongoDB / SQLite)
Support for multiple documents
User authentication and identity
Cursor and presence indicators
Rich text editor or code editor (Monaco)
Version history and undo/redo
Export notes as PDF or text files

### 📚 Learning Outcomes

Understanding WebSocket-based real-time systems
Implementing multi-user collaboration
Client–server communication
React component structuring
Backend event handling with Node.js
Version control using Git and GitHub

### 🏁 Internship Details

Internship Provider: CODTECH IT SOLUTIONS
Task: Task-02 – Collaborative Note-Sharing Application
Domain: Web Development / Real-Time Applications

### 📜 License

This project is developed for educational and internship purposes.
You are free to modify and enhance it for learning and personal use.
