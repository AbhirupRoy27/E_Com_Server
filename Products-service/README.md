# Products API Documentation

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

# Default Route (/)

- Serves as a health-check endpoint.
- Confirms that the API is operational.

Response Example

```
{
  "status": "success",
  "message": "common router working",
  "url": "/"
}

```

# Base Products Route (/api/products)

- All product-related endpoints are prefixed with /api/products.

- This route confirms that the products module is reachable.

- All data-related operations are performed under this base path.

Response Example

```
{
  "status": "success",
  "message": "Request working at Products",
  "possibleRoutes": [
    "/add-product (POST)",
    "/all-products (GET)",
    "/one-product (GET)"
  ],
  "url": "/api/products"
}
```

<br />

# Products API Endpoints

## Add Product

<b> Route: </b> /add-product

<b> Method: </b> POST

- Creates a new product entry in the database.
- Requires a request body with the following structure:

```
{
  "title": "",
  "seller": "",
  "description": "",
  "price": "",
  "category": "",
  "stock": "",
  "coverImage": "",
  "productImages": ["", "", "", "", "", ""],
  "discount": "",
  "verified": ""
}
```

<b>Notes</b>

- productImages supports a maximum of 6 image URLs.
- All fields are validated before database insertion.
- On successful validation, the product is stored in the database.

## Get All Products

<b>Route:</b> /all-products

<b>Method:</b> GET

- Retrieves all products from the database.

Response Example

```
{
  "status": "success",
  "message": "Request Complete",
  "url": "/api/products/all-products",
  "response": [{}, ...]
}
```

<b>Pagination</b>

This endpoint supports pagination through query parameters:

- page – page number
- limit – number of records per page

Results are returned based on the provided pagination parameters.

## Get One Product

<b>Route:</b> /one-products

<b>Method:</b> GET

- Retrieves a single product from the database.
- Requires the following query parameter:
  - id – unique identifier of the product

Successful Response Example

```
{
  "status": true,
  "message": "Working API",
  "product": { ... }
}
```

- Error responses may be returned for invalid or missing IDs.
