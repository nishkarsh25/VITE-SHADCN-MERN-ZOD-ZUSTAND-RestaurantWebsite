# VITE-SHADCN-MERN-ZOD-ZUSTAND-RestaurantWebsite

Welcome to the MERN (MongoDB, Express.js, React.js, Node.js) stack project! This comprehensive guide will walk you through every aspect of this project, including its structure, setup instructions, usage, API endpoints, backend, frontend, contributing guidelines, license information, and how to get in touch for support or inquiries.

## Introduction

A full-stack **Food Delivery Web Application** built using modern web technologies. This application allows users to browse restaurants, view detailed restaurant menus, add items to a cart, and proceed with checkout. The system also supports user authentication, including email verification, and is equipped with an administrative dashboard to manage restaurant details, menus, and customer orders.

This project is perfect for building a scalable and modular food delivery platform that includes features for users, restaurant owners, and administrators.

## **Features**

### **User Features**
- **User Authentication**: Secure authentication with email/password. Supports login, signup, forgot password, and reset password functionalities.
- **Email Verification**: New users are required to verify their email address before accessing full app features.
- **Browse Restaurants**: Users can view all restaurants and search for specific restaurants or dishes using keywords.
- **View Restaurant Details**: Detailed restaurant pages that include information about the restaurant and its menu items.
- **Add Items to Cart**: Seamlessly add items to the cart and update item quantities before checkout.
- **Order Placement**: Users can place an order and track the status of their order on the success page.
- **Profile Management**: Users can view and update their profile information.
- **Dark Mode**: The app supports both light and dark themes, and users can toggle between them.

### **Admin Features**
- **Admin Authentication**: Only authorized admin users can access administrative functionalities.
- **Manage Restaurants**: Admins can add, update, and delete restaurant details.
- **Manage Menus**: Admins can add, update, and delete menu items for restaurants.
- **View Customer Orders**: Admins can track and manage customer orders in real-time.

### **Additional Features**
- **Protected Routes**: Certain routes, such as the admin dashboard and user profile, are protected and can only be accessed by authenticated and authorized users.
- **Search Functionality**: Users can search for specific dishes or restaurants using a search bar.
- **Responsive Design**: The app is mobile-responsive, ensuring that it works well on different screen sizes.
- **Optimized Performance**: Lazy loading and optimized asset management for faster page load times.

## Live Demo

You can try out the live demo of the app [here](https://vite-shadcn-mern-redux-socket.onrender.com).

## Folder Structure

```
📦src
 ┣ 📂admin
 ┃ ┣ 📜AddMenu.tsx
 ┃ ┣ 📜Orders.tsx
 ┃ ┗ 📜Restaurant.tsx
 ┣ 📂auth
 ┃ ┣ 📜ForgotPassword.tsx
 ┃ ┣ 📜Login.tsx
 ┃ ┣ 📜ResetPassword.tsx
 ┃ ┗ 📜Signup.tsx
 ┣ 📂components
 ┃ ┣ 📜Cart.tsx
 ┃ ┣ 📜HereSection.tsx
 ┃ ┣ 📜Loading.tsx
 ┃ ┣ 📜Profile.tsx
 ┃ ┣ 📜RestaurantDetail.tsx
 ┃ ┗ 📜Success.tsx
 ┣ 📂layout
 ┃ ┗ 📜MainLayout.tsx
 ┣ 📂store
 ┃ ┣ 📜useCartStore.ts
 ┃ ┣ 📜useOrderStore.ts
 ┃ ┣ 📜useRestaurantStore.ts
 ┃ ┗ 📜useUserStore.ts
 ┣ 📂types
 ┃ ┣ 📜cartType.ts
 ┃ ┣ 📜orderType.ts
 ┃ ┗ 📜userType.ts
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┗ 📜main.tsx



```

## GIF's

<img src="https://github.com/nishkarsh25/VITE-SHADCN-MERN-REDUX-SOCKET-InstagramClone/blob/main/Screenshots/ss1.gif" alt="Screenshot 1" width="1000">

## **Tech Stack**

### **Frontend**
- **React**: A JavaScript library for building dynamic and interactive user interfaces.
- **TypeScript**: A typed superset of JavaScript that adds type definitions, improving developer experience and reducing runtime errors.
- **Tailwind CSS**: A utility-first CSS framework that allows you to rapidly build custom designs without leaving your HTML.
- **React Router v6**: For routing and navigation across different pages in the application.
- **Zustand**: A lightweight state management library for managing global state throughout the application.
- **Zod**: A TypeScript-first schema declaration and validation library, used for validating and parsing structured data.
- **Lucide React**: An icon library used to display consistent and scalable icons across the app.

### **Backend**
- **Node.js**: JavaScript runtime environment used to run the backend services (if applicable).
- **Express.js**: A minimal and flexible Node.js web application framework (if backend is implemented).
- **REST API**: The backend interacts with the frontend through a RESTful API for handling user authentication, restaurant details, menu items, and orders.

### **Authentication and Security**
- **JWT (JSON Web Tokens)**: For secure authentication and session management.
- **Email Verification API**: Integration with a third-party email service for sending email verification links.

### **Payments**
- **Stripe**: A payment gateway integration to handle secure payments during checkout (optional).

### **Development Tools**
- **Vite**: A fast build tool that provides better performance during development and production builds.
- **ESLint & Prettier**: For maintaining code quality and formatting consistency.
- **Git & GitHub**: Version control and project collaboration.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/BreadcrumbsVITE-SHADCN-MERN-ZOD-ZUSTAND-RestaurantWebsite.git
   ```

2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```

   Replace `<branch-name>` with the name of the branch you want to checkout.

3. Start the Backend Server: Launch the backend Node.js server.

   ```bash
   cd backend
   node index.ts
   ```

4. Start the Frontend Development Server: Run the React development server for the frontend application.

   ```bash
   cd frontend
   npm run dev
   ```

## Usage

1. **Run the development server**:

   ```bash
   cd client
   npm start
   ```

2. **Open your browser** and navigate to http://localhost:5173 to view the app.


Here’s a detailed How to Use section containing features of the app and an Endpoints section in Markdown code for your README file:

markdown
Copy code
## **How to Use**

### **User Flow and Features**

1. **User Registration and Login**
   - **Signup**: New users can register by providing their full name, email, password, contact details, and address.
   - **Login**: Existing users can log in using their registered email and password.
   - **Email Verification**: Upon signup, a verification email is sent to the user. Users must verify their email before accessing the app's full functionality.
   - **Forgot Password**: If a user forgets their password, they can use the "Forgot Password" feature to receive a reset link via email.
   - **Reset Password**: Users can set a new password using the reset link they receive.

2. **Browsing Restaurants**
   - **Home Page**: After login, users are taken to the home page where they can browse available restaurants.
   - **Search Functionality**: Users can search for restaurants or dishes using keywords via the search bar.
   - **Restaurant Details**: Clicking on a restaurant takes the user to the restaurant's detail page, where they can view the menu, restaurant info, and ratings.

3. **Managing the Cart**
   - **Add to Cart**: Users can add items from a restaurant's menu to their cart. They can specify quantities, and the total cost is updated dynamically.
   - **View Cart**: Users can view their cart at any time and update item quantities or remove items.

4. **Placing an Order**
   - **Checkout**: After reviewing the cart, users can proceed to the checkout page, where they confirm delivery details such as address, city, and contact number.
   - **Order Confirmation**: Users are presented with a review screen to confirm their order. Once confirmed, the system processes the payment (if integrated) and creates the order.
   - **Order Status**: Users can view the order status and order summary on the order success page.

5. **User Profile Management**
   - **Profile Page**: Users can view and update their personal information, including name, contact details, and address, through the profile page.

6. **Admin Functionality**
   - **Restaurant Management**: Admins can add, update, or delete restaurant listings, including the restaurant’s name, location, and menu items.
   - **Menu Management**: Admins can add or remove menu items for each restaurant, including setting the price, description, and uploading an image for each item.
   - **Order Management**: Admins can view all customer orders, track their status, and manage order processing.

7. **Additional Features**
   - **Dark Mode**: Users can toggle between light and dark mode for a personalized user interface experience.
   - **Responsive Design**: The application is fully responsive, working on desktop, tablet, and mobile devices.


## **API Endpoints**

Here is a list of the major API endpoints used by the application. These endpoints interact with the backend (if applicable) to handle user authentication, restaurant management, and orders.

### **Authentication Endpoints**

- **POST** `/api/auth/signup`
  - Registers a new user.
  - **Request Body**: 
    ```json
    {
      "fullname": "John Doe",
      "email": "johndoe@example.com",
      "password": "password123",
      "contact": "9876543210",
      "address": "123 Main St",
      "city": "Hyderabad",
      "country": "India"
    }
    ```
  - **Response**: Success message and user details.

- **POST** `/api/auth/login`
  - Logs in an existing user.
  - **Request Body**:
    ```json
    {
      "email": "johndoe@example.com",
      "password": "password123"
    }
    ```
  - **Response**: Authentication token and user details.

- **POST** `/api/auth/forgot-password`
  - Sends a reset password link to the user's email.
  - **Request Body**:
    ```json
    {
      "email": "johndoe@example.com"
    }
    ```

- **POST** `/api/auth/reset-password`
  - Resets the user's password.
  - **Request Body**:
    ```json
    {
      "token": "resetToken",
      "newPassword": "newPassword123"
    }
    ```

### **User Endpoints**

- **GET** `/api/user/profile`
  - Retrieves the current user's profile information.
  - **Response**:
    ```json
    {
      "fullname": "John Doe",
      "email": "johndoe@example.com",
      "contact": "9876543210",
      "address": "123 Main St",
      "city": "Hyderabad",
      "country": "India"
    }
    ```

- **PUT** `/api/user/profile`
  - Updates the current user's profile information.
  - **Request Body**:
    ```json
    {
      "fullname": "John Doe",
      "contact": "9876543210",
      "address": "123 Main St",
      "city": "Hyderabad",
      "country": "India"
    }
    ```

### **Restaurant and Menu Endpoints**

- **GET** `/api/restaurants`
  - Fetches a list of all available restaurants.
  - **Response**:
    ```json
    [
      {
        "id": "restaurant1",
        "name": "Restaurant 1",
        "location": "Hyderabad",
        "rating": 4.5
      },
      {
        "id": "restaurant2",
        "name": "Restaurant 2",
        "location": "Bangalore",
        "rating": 4.0
      }
    ]
    ```

- **GET** `/api/restaurants/:id`
  - Fetches detailed information about a specific restaurant, including its menu.
  - **Response**:
    ```json
    {
      "id": "restaurant1",
      "name": "Restaurant 1",
      "location": "Hyderabad",
      "menu": [
        {
          "id": "menuItem1",
          "name": "Pizza",
          "price": 250,
          "image": "/images/pizza.jpg"
        },
        {
          "id": "menuItem2",
          "name": "Burger",
          "price": 150,
          "image": "/images/burger.jpg"
        }
      ]
    }
    ```

- **POST** `/api/restaurants`
  - (Admin Only) Creates a new restaurant listing.
  - **Request Body**:
    ```json
    {
      "name": "Restaurant 3",
      "location": "Mumbai",
      "menu": []
    }
    ```

- **PUT** `/api/restaurants/:id`
  - (Admin Only) Updates an existing restaurant listing.
  - **Request Body**:
    ```json
    {
      "name": "Updated Restaurant Name",
      "location": "Updated Location"
    }
    ```

- **DELETE** `/api/restaurants/:id`
  - (Admin Only) Deletes a restaurant.

### **Cart and Order Endpoints**

- **POST** `/api/cart`
  - Adds an item to the user's cart.
  - **Request Body**:
    ```json
    {
      "menuId": "menuItem1",
      "quantity": 2
    }
    ```

- **GET** `/api/cart`
  - Retrieves the current user's cart.
  - **Response**:
    ```json
    [
      {
        "menuId": "menuItem1",
        "name": "Pizza",
        "quantity": 2,
        "price": 250
      }
    ]
    ```

- **POST** `/api/orders`
  - Places an order for the current user.
  - **Request Body**:
    ```json
    {
      "cartItems": [
        {
          "menuId": "menuItem1",
          "quantity": 2
        }
      ],
      "deliveryDetails": {
        "address": "123 Main St",
        "city": "Hyderabad",
        "contact": "9876543210"
      }
    }
    ```

- **GET** `/api/orders`
  - Retrieves all orders for the current user.
  - **Response**:
    ```json
    [
      {
        "orderId": "order1",
        "cartItems": [
          {
            "menuId": "menuItem1",
            "name": "Pizza",
            "quantity": 2,
            "price": 250
          }
        ],
        "status": "Confirmed"
      }
    ]
    ```


## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨

## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.

## Credits

This project wouldn't be possible without the contributions of the following:

- **React**: A JavaScript library for building user interfaces. Visit [React](https://reactjs.org/) for more information.
- 
- **Vite**: A fast build tool that serves your code via native ESM. Visit [Vite](https://vitejs.dev/) for more information.
  
- **Shadcn UI**: A component library providing a set of highly customizable UI components built for React. Visit [Shadcn UI](https://ui.shadcn.com/docs/installation/vite) for more information.
- 
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs rapidly. Visit [Tailwind CSS](https://tailwindcss.com/) for more information.

- **React Router**: React Router is a library for routing in React applications, allowing for navigation between different components. Visit [React Router](https://reactrouter.com/) for more information.

- **Zustand**: A small, fast, and scalable state management solution for React, providing a lightweight alternative to Redux. Visit [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) for more information.

- **Zod**: A TypeScript-first schema declaration and validation library, used for validating and parsing structured data. Visit [Zod](https://zod.dev/) for more information.

- **Axios**: Axios is a promise-based HTTP client for making asynchronous requests in JavaScript applications. Visit [Axios](https://axios-http.com/) for more information.

- **Express**: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Visit [Express](https://expressjs.com/) for more information.

- **Mongoose**: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js, providing a straightforward schema-based solution for modeling application data. Visit [Mongoose](https://mongoosejs.com/) for more information.

- **JSON Web Token (JWT)**: JSON Web Token is a compact, URL-safe means of representing claims to be transferred between two parties. It is commonly used for authentication and authorization in web applications. Visit [JWT](https://jwt.io/) for more information.

- **Netlify**: Netlify provides seamless deployment and hosting solutions, making it easy to deploy web applications and share them with the world. Visit [Netlify](https://www.netlify.com/) for more information.

- **Render**: Render offers a modern cloud platform for deploying and running web applications, databases, and other services. Visit [Render](https://render.com/) for more information.

- **MongoDB Atlas**: MongoDB Atlas is a fully managed cloud database service for modern applications. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for more information.


## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkarsh25)
  - Email: bm21btech11016@gmail.com
