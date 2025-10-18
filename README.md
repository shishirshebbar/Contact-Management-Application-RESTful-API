# Contact Management Backend (RESTful API)

## About the Project

This project is a backend RESTful API built for managing contacts efficiently. It allows users to create, update, delete, and retrieve contact information through well-structured API endpoints. The backend also includes authentication and secure data handling, ensuring user privacy and data integrity. The application is developed using Node.js, Express, and MongoDB.

---

## Features

- Create, read, update, and delete contacts  
- User authentication using JSON Web Tokens (JWT)  
- Secure password handling with bcrypt  
- MongoDB integration for storing user and contact data  
- Environment-based configuration  
- Organized and maintainable RESTful routes  

---

## Tech Stack

- **Node.js** – Server runtime  
- **Express.js** – Web framework for RESTful API development  
- **MongoDB & Mongoose** – NoSQL database and ORM  
- **JWT (jsonwebtoken)** – Authentication and authorization  
- **bcrypt** – Password hashing for security  
- **dotenv** – Environment variable management  
- **Nodemon** – Automatic server restarts during development  

---

## Clone the Repository

To get a local copy of the project, open your terminal and run:

```bash
git clone https://github.com/shishirshebbar/Contact-Management-Application-RESTful-API.git

```

## Run Instructions

1. Install dependencies  
   ```bash
   npm install
   ```

2. Set up environment variables  
   Create a `.env` file in the project root with the following contents (replace placeholders):

   ```ini
   PORT=5000
   ACCESS_TOKEN_SECRET=your_jwt_secret_key
   CONNECTION_STRING=your_mongodb_connection_uri
   ```

3. Start the server  
   ```bash
   npm start
