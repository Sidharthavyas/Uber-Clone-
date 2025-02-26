# Ride-Sharing API Documentation

This API provides endpoints for user and captain authentication, profile management, and logout functionality.

## Table of Contents
- [User Registration](#user-registration)
- [User Login](#user-login)
- [User Profile](#user-profile)
- [User Logout](#user-logout)
- [Captain Registration](#captain-registration)
- [Captain Login](#captain-login)
- [Captain Profile](#captain-profile)
- [Captain Logout](#captain-logout)
- [Authentication](#authentication)
- [Error Handling](#error-handling)

---

## User Registration
### `POST /users/register`
Registers a new user.

### **Request Body**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```
- `firstname`: Minimum 3 characters
- `lastname`: Minimum 3 characters
- `email`: Must be a valid email
- `password`: Minimum 6 characters

### **Response (201 Created)**
```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### **Possible Errors**
- `400 Bad Request`: Invalid input format
- `409 Conflict`: Email already exists

---

## User Login
### `POST /users/login`
Authenticates a user and returns a JWT token.

### **Request Body**
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### **Response (200 OK)**
```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### **Possible Errors**
- `401 Unauthorized`: Invalid credentials

---

## User Profile
### `GET /users/profile`
Retrieves the profile of the authenticated user.

### **Headers**
```plaintext
Authorization: Bearer <token>
```

### **Response (200 OK)**
```json
{
  "_id": "user_id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

### **Possible Errors**
- `401 Unauthorized`: Invalid or missing token

---

## User Logout
### `GET /users/logout`
Logs out the user by invalidating the token.

### **Response (200 OK)**
```json
{
  "message": "Logged out successfully"
}
```

### **Possible Errors**
- `401 Unauthorized`: Invalid or missing token

---

## Captain Registration
### `POST /captains/register`
Registers a new captain with vehicle details.

### **Request Body**
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```
- `firstname`, `lastname`: Minimum 3 characters
- `email`: Must be unique
- `password`: Minimum 6 characters
- `vehicle.color`: Minimum 3 characters
- `vehicle.plate`: Minimum 3 characters, must be unique
- `vehicle.capacity`: Minimum value of 1
- `vehicle.vehicleType`: One of `car`, `bike`, `auto`

### **Response (201 Created)**
```json
{
  "token": "your_jwt_token",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### **Possible Errors**
- `400 Bad Request`: Invalid input format
- `409 Conflict`: Email or plate number already exists

---

## Captain Login
### `POST /captains/login`
Authenticates a captain and returns a JWT token.

### **Request Body**
```json
{
  "email": "jane.doe@example.com",
  "password": "password123"
}
```

### **Response (200 OK)**
```json
{
  "token": "your_jwt_token",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### **Possible Errors**
- `401 Unauthorized`: Invalid credentials

---

## Captain Profile
### `GET /captains/profile`
Retrieves the authenticated captain's profile.

### **Headers**
```plaintext
Authorization: Bearer <token>
```

### **Response (200 OK)**
```json
{
  "_id": "captain_id",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### **Possible Errors**
- `401 Unauthorized`: Invalid or missing token

---

## Captain Logout
### `GET /captains/logout`
Logs out the captain by invalidating the token.

### **Response (200 OK)**
```json
{
  "message": "Logged out successfully"
}
```

### **Possible Errors**
- `401 Unauthorized`: Invalid or missing token

---

## Authentication
All endpoints requiring authentication use JWT tokens. Include the following in the request headers:
```plaintext
Authorization: Bearer <your_token>
```

---

## Error Handling
### Common Errors
| Status Code | Description |
|-------------|-------------|
| 400 Bad Request | Input validation failed |
| 401 Unauthorized | Invalid token or credentials |
| 403 Forbidden | Access denied |
| 404 Not Found | Resource not found |
| 409 Conflict | Duplicate record found |

---

This API provides user and captain authentication and profile management for a ride-sharing platform. Future improvements could include password reset, email verification, and advanced security measures.
