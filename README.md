# DevTinder

DevTinder is a developer networking platform inspired by Tinder, where developers can connect based on mutual interests. Users can send, accept, or ignore connection requests and build their professional network.

## Tech Stack

### Frontend:
- React (Vite)
- React Router DOM
- Tailwind CSS
- Daisy UI
- Redux Toolkit
- Axios

### Backend:
- Node.js
- Express
- MongoDB
- CORS

## Features

### Authentication
- `POST /signup` - Register a new user
- `POST /login` - Authenticate user
- `POST /logout` - Logout user

### Profile Management
- `GET /profile/view` - View user profile
- `PATCH /profile/edit` - Edit profile details
- `PATCH /profile/password` - Update password (Forgot Password API)

### Connection Requests
- `POST /request/send/:status/:userId` - Send a connection request
- `POST /request/review/:status/:requestId` - Review a connection request (accept/reject)

### User Features
- `GET /user/requests/received` - View received connection requests
- `GET /user/connections` - View confirmed connections
- `GET /user/feed` - View suggested developer profiles

**Request Status:** `ignored`, `interested`, `accepted`, `rejected`


### Project-setup

Step 1)-> git clone https://github.com/NitishGarg2605/devtinder.git

Step 2)-> cd devtinder

Step 3)-> cd frontend

Step-4)-> npm install

Step-5)-> cd ..

Step-6)-> cd backend

Step-7)-> npm install

Step-8)-> cd ..

Step-9)-> add MONGO_URL in .env file  
