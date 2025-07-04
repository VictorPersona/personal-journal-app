# Personal Journal App

The **Personal Journal App** is a full-stack web application that allows users to create, view, edit, and delete journal entries. It features user authentication and a clean, responsive UI built with modern web technologies.

## Features

- **User Authentication**: Secure login and registration using JWT.
- **CRUD Operations**: Create, read, update, and delete journal entries.
- **Responsive Design**: Mobile-friendly UI built with TailwindCSS.
- **Backend API**: RESTful API built with Express and MongoDB.
- **Frontend Framework**: React with Vite for fast development.

---

## Tech Stack

### Frontend
- **React**: Component-based UI library.
- **Vite**: Fast build tool for modern web apps.
- **TailwindCSS**: Utility-first CSS framework.
- **React Router**: For client-side routing.

### Backend
- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user and journal data.
- **Mongoose**: ODM for MongoDB.
- **JWT**: Secure user authentication.

---

## Installation

### Prerequisites
- Node.js and npm installed.
- MongoDB instance running.
- `.env` file with the following variables:
    ```
    MONGODB_URI=<your-mongodb-uri>
    JWT_SECRET_KEY=<your-secret-key>
    PORT=<your-port>
    ```

### Steps
1. Clone the repository:
     ```bash
     git clone <repository-url>
     cd personal-journal-app
     ```

2. Install dependencies for both client and server:
     ```bash
     cd server
     npm install
     cd ../client
     npm install
     ```

3. Start the backend server:
     ```bash
     cd ../server
     npm run dev
     ```

4. Start the frontend development server:
     ```bash
     cd ../client
     npm run dev
     ```

5. Open the app in your browser at `http://localhost:5173`.

---

## Folder Structure

```
personal-journal-app/
├── client/               # Frontend code
│   ├── src/              # React components, pages, and context
│   ├── public/           # Static assets
│   ├── vite.config.js    # Vite configuration
│   └── package.json      # Frontend dependencies
├── server/               # Backend code
│   ├── models/           # Mongoose schemas
│   ├── controllers/      # API logic
│   ├── routes/           # API routes
│   ├── middleware/       # Authentication middleware
│   ├── server.js         # Entry point for the backend
│   └── package.json      # Backend dependencies
└── README.md             # Project documentation
```

---

## API Endpoints

### Authentication
- `POST /auth/register`: Register a new user.
- `POST /auth/login`: Login and receive a JWT.

### Journals
- `GET /journals`: Fetch all journals for the logged-in user.
- `GET /journals/:id`: Fetch a specific journal by ID.
- `POST /journals`: Create a new journal.
- `PUT /journals/:id`: Update an existing journal.
- `DELETE /journals/:id`: Delete a journal.

---


## License

This project is licensed under the MIT License.  
