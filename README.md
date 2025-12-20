# E-Com Server

A simple and straightforward e-commerce backend server.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```
git clone <repository-url>
cd E_Com_Server
npm install or npm ci
```

### Running the Server

```
npm start
```

The server will start on `http://localhost:3000` (or your configured port).

## Project Structure

```
E_Com_Server/
  ├── main-service/
    ├── src/
    ├── routes/
    ├── models/
    ├── controllers/
    ├── config/
  ├── Products-service/ (under developemnt)
    ├── src/
    ├── routes/
    ├── models/
    ├── controllers/
    ├── config/
  ├── auth-service/ (under developemnt)
    ├── src/
    ├── routes/
    ├── models/
    ├── controllers/
    ├── config/
  ├── user-service/ (under developemnt)
    ├── src/
    ├── routes/
    ├── models/
    ├── controllers/
    ├── config/
  └── README.md
```

## Features

- Product management
- User authentication
- Shopping cart functionality
- Order processing

## Environment Variables

Create a `.env` file in the root directory:

```
PORT=3000
DATABASE_URL=your_database_url
API_KEY=your_api_key
```

## Contributing

Feel free to fork and submit pull requests.
