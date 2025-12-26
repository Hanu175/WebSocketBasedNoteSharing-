**_# WebSocketBasedNoteSharing-_**

This project implements a WebSocket-based real-time collaborative note-sharing application where multiple users can edit shared notes simultaneously. It demonstrates key principles of real-time web systems and provides a scalable base for future improvements.

**Introduction**

This project is a real-time collaborative note-sharing web application built using WebSockets. It allows multiple users to view and edit the same notes simultaneously, similar in core behavior to tools like Google Docs.
The project demonstrates the use of real-time client–server communication, multi-user synchronization, and modern frontend–backend separation using React and Node.js.

**Problem Statement**

Most basic note-taking applications are single-user and do not support live collaboration. When multiple users need to work together, they often face issues such as:
1. Delayed updates
2. Manual sharing of files
3. Version conflicts
4. Lack of synchronization
The goal of this project is to solve these problems by providing a real-time collaborative environment where users can share and edit notes live.
**
Project Objectives**

The main objectives of this project are:
To develop a collaborative note-taking tool
To implement real-time updates using WebSockets
To support multiple users editing the same document
To maintain a shared document state
To demonstrate understanding of real-time web architectures

**Technology Stack

Frontend**

React (Vite)
JavaScript
HTML
CSS

**Backend**

Node.js
WebSocket (ws library)
Communication
WebSocket protocol (ws://)

**6.System Architecture

High Level Architecture**

_User Browser 1 ─┐
                ├── WebSocket ──► Node.js Server
User Browser 2 ─┘_

**7.What the Project Currently Has (Features)**

**Real-Time Collaboration**

Multiple users can open the application at the same time
All users see the same shared notes
Changes are synchronized instantly

**WebSocket Communication**

Persistent bi-directional connection
No page refresh required
Low-latency updates

**Shared Document State**

Notes are stored in server memory
Every connected client receives updates

**Simple and Clean UI**

Text editor using a textarea
Easy to use and understand
Beginner-friendly design

**8.How the Project Works (Step-by-Step)**

1.The server starts and listens on a WebSocket port.
2.A user opens the application in a browser.
3.The client connects to the server using WebSocket.
4.The user joins a shared document.
5.When the user types:
6.The change is sent to the server.
7.The server updates the shared document.
8.The server broadcasts the update to all users.
9.All connected users instantly see the updated notes.

**9.Current Limitations**

At the current stage, the project has the following limitations:
Notes are not permanently saved
Data is lost when the server restarts
No user authentication
Only one shared document
Plain text only (no rich formatting)
No version history or undo support
These limitations are intentional to keep the project simple and focused on real-time collaboration.

**10.Future Enhancements (Project Betterment)**

The project can be improved and extended in many ways:

**10.1 Data Persistence**

Save notes to:
    1.File system
    2.Database (MongoDB, SQLite, PostgreSQL)
Allow notes to persist after server restarts

**10.2 Multiple Documents**

Create multiple note documents
Allow users to select or create new notes
Document-based collaboration

**10.3 User Authentication**

Login / signup system
Identify users uniquely
Show which user is editing

**10.4 Cursor & Presence Tracking**

Show live cursors of other users
Display active users list

**10.5 Rich Text / Code Editor**

Replace textarea with:
Rich text editor
Code editor (Monaco Editor)
Enable formatting and syntax highlighting

**10.6 Version History**

Track changes over time
Allow undo / rollback
Show edit history

**Learning Outcomes**

Through this project, the following concepts were learned:
WebSocket communication
Real-time data synchronization
Client–server architecture
React component structure
Backend event handling
Project structuring and GitHub usage

_**Conclusion**__

This project successfully demonstrates the implementation of a real-time collaborative note-sharing application using WebSockets. It fulfills the core requirement of enabling live multi-user collaboration and serves as a strong foundation for building more advanced collaborative tools in the future.

The project is functionally complete for its current scope and can be enhanced further with persistence, authentication, and advanced collaboration features.
