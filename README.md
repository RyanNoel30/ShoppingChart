# ShoppingChart
# Express.js Shopping Cart

This project is a dynamic web application that converts a static shopping cart website into an Express.js-powered application. It moves the shopping cart management from the client-side to the server-side using cookies and RESTful API routes.

## Features

- **Static File Serving:** Express serves the frontend assets (HTML, CSS, JS) from the `/public` directory.
- **Server-Side Cookie Management:** Utilizes `cookie-parser` to handle cart data securely on the backend.
- **RESTful API Routes:**
  - `GET /cart`: Retrieves the current cart contents from cookies.
  - `POST /cart/add`: Adds a new item to the cart and updates the cookie.
  - `POST /cart/clear`: Removes the cart cookie and resets the session.

## Project Structure

```text
express-shopping-cart/
├── server.js          # Entry point and server configuration
├── public/            # Static files (HTML, CSS, Frontend JS)
├── routes/
│   └── cart.js        # Cart logic and API endpoints
├── package.json       # Dependencies and scripts
└── README.md          # Documentation