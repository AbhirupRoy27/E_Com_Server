# User API Documentation

This document provides a comprehensive overview of the available routes, request formats, and responses for the Products API.

---

## Running the Server

Start the server using the following command:

```
npm start
```

Once the server is running, it will be accessible at:

```
http://localhost:4000
```

(or the port specified in your environment configuration).

## Default Route (/)

- Serves as a health-check endpoint.
- Confirms that the API is operational.

Response Example

```
{
  status: 'success',
  message: 'API: User-Service is active and ready to use',
  possibleRoutes: [
    {
        "name": "",
        "route": "",
        "use": ""
      },
  ],
}

```

## Default Error (ERROR)

- This is hit on any unsuccessful route on the API.

```
{
    "status": "failure",
    "message": "No such route in API",
    "url": "/api/orderss"
}
```

<br />

# Possible Routes

- ALl possible routes for this API.

## Orders Routes ( /api/orders )

### i) Orders Default Route ( / )

- This handles all the order related service on NextGen Store.
- Possible routes available for now.
  - i) ' /order-confirm ' is a PATCH route.
  - ii) ' /find-order ' is a GET route.
- This is a GET route.
- Response

```
{
    "status": "success",
    "message": "API: Order-service Working.",
    "possibleRoutes": [
        {
            "name": "order-confirm",
            "route": "",
            "devInfo": "This Route handles the Order confirm related API calls.",
            "method": "PATCH"
        },
        {
            "name": "find-order",
            "route": "",
            "devInfo": "This Route handles the finding order related API calls.",
            "method": "GET"
        }
    ]
}
```

### ii) Orders Confirm Route ( /order-confirm )

- This is handles the successful orders on NextGen Store.
- This takes data in the body and the middleware validates the data.

  - Example

  ```
  {
    email: "abcc@gmail.com",
    order: {
      "customerEmail" : "abcc@gmail.com",
      "productId": "6937ba12067ea941e3aa3564",
      "quantity": "2",
      "amount": "200",
      "billingAddress" : {
        "buildingNo": "10",
        "pincode": "345091",
        "street": "patna",
        "city": "patna",
        "state": "Bihar"
        },
      "shippingAddress" : {
        "buildingNo": "10",
        "pincode": "345091",
        "street": "patna",
        "city": "patna",
        "state": "Bihar"
        }
      },
      "paymentMode": "",
      "returnValidTill: "",
      "DeliveryBy: "",
  }
  ```

- On failure there are different errors based on the inputs.
- If passed the handler process the request.
- The order is updated on the user data and the the response.
  ```
  {
    _id: "",
    name: "",
    email: "",
    orders: [],
  }
  ```

### iii) Orders Find Route ( /find-order )

- It is a GET Endpoint
- This takes data in the body or query string then middleware validates the data.
  ```
  {
    orderId: "6937ba12067ea941e3aa3564"
  }
  ```
- On failure there are different errors based on the inputs.
- This is a frontend used Endpoint.
- It will simply return the Order with matching ID.

## Auth Routes ( /api/auth )

### i) Orders Default Route ( /add-user )

- This is a POST route.
- This handles register the user in the DB.
- Input is validated and then the request is handled.
  - Body Example,
  ```
  {
    "username": "Soham",
    "email": "abcd@gmail.com",
    "password": "Soham12345",
    "orders": [],
    "savedAddress": {
      "buildingNo": 0,
      "pincode": 0,
      "street": "",
      "city": "",
      "state": ""
    }
  }
  ```
- The password is hased and saved in the DB to secure user data.
- { username, email, password } are required fileds.
  - response example,
  ```
  {
    "status": "success",
    "message": "data is added to DB",
    "insertedData": {
      "username": "Soham",
      "email": "abcd@gmail.com",
      "isSubscribed": false
    }
  }
  ```

### ii) Orders Default Route ( /user-login )

- It is a POST route.
- This is the user login handler.
- { email, password } must be given in the body of the request.
  - request example,
  ```
  {
    "email": "abcd@gmail.com",
    "password": "Soham12345",
  }
  ```
- On successful Auth it responds.
  ```
  {
    "email": "abcd@gmail.com",
    "username": "Soham",
    "orders": [],
    "wishlist": [],
    "savedAddress": {
      "buildingNo": 0,
        "pincode": 0,
        "street": "",
        "city": "",
        "state": ""
      },
    "isSubscribed": false
  }
  ```

### iii) Orders Default Route ( /get-user )

- It is a GET route.
- This gets the user info in the reponse.
- { email or username } must be given in the body of the request.
  - request example,
  ```
  {
    "email": "abcd@gmail.com",
    "username": "Soham",
  }
  ```
  - On successful Auth it responds.
  ```
  {
    "status": "success",
    "message": "API Working: User Data found with email: abcd@gmail.com.",
    "userDetails": {
      "_id": "694c12ab41eba75a8ea3cce8",
      "firstName": "",
      "lastName": "",
      "username": "Soham",
      "email": "abcd@gmail.com",
      "orders": [],
      "wishlist": [],
      "isSubscribed": false
    }
  }
  ```

### iv) Orders Default Route ( / )

- This is the default route
- It returns the meta data about the service
  - example,
  ```
  {
    "status": "success",
    "message": "API: Order-service Working.",
    "possibleRoutes": [
      {
        "name": "",
        "route": "/add-user",
        "devInfo": "This Route handles adding User to DB",
        "method": "POST"
      },
      {
        "name": "",
        "route": "/user-login",
        "devInfo": "This Route handles the Order confirm related API calls.",
        "method": "POST"
      },
      {
        "name": "",
        "route": "/get-user",
        "devInfo": "This Route handles the Order confirm related API calls.",
        "method": "GET"
      },
      {
        "name": "Default Route",
        "route": "/",
        "devInfo": "This Route handle Default behaviour.",
        "method": "GET"
      }
    ]
  }
  ```

## Wishlist Routes ( /api/orders )
