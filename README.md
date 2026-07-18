<p align="center">
  <img src="/frontend/public/logo.png" alt="Cartivo Logo" width="180">
</p>

<h1 align="center">Cartivo</h1>

Cartivo is a modern full-stack E-Commerce web application built using the MERN Stack. It provides a seamless shopping experience with secure authentication, product management, shopping cart functionality, and an admin dashboard for managing products.

---

## 🚀 Features

### 👤 Authentication
- User Registration
- Secure Login & Logout
- JWT Authentication
- HTTP Only Cookies
- Email Verification using OTP
- Password Encryption using bcrypt

---

### 🛍️ Product Management

- Browse Products
- Product Details Page
- Product Categories
- Product Search
- Update Products
- Delete Products
- Product Image Upload
- Cloudinary Image Storage

---

### 🛒 Shopping Cart

- Add to Cart
- Remove from Cart
- Increase Quantity
- Decrease Quantity
- Total Price Calculation
- Persistent Cart using Redux

---

### 👨‍💼 Admin Features

- Admin Authentication
- Add Products
- Update Products
- Delete Products
- Manage Inventory
- Upload Product Images

---

### 🎨 UI Features

- Responsive Design
- Modern Glassmorphism UI
- Mobile Friendly
- Dark Theme
- Animated Buttons
- Beautiful Product Cards

---

## 🛠 Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- Redux Toolkit
- React Redux
- React Icons
- CSS3

---

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Multer
- Cloudinary
- Nodemailer

---

## 📂 Project Structure

```
Cartivo
│
├── client
│   ├── components
│   ├── pages
│   ├── context
│   ├── redux
│   ├── services
│   ├── hooks
│   └── assets
│
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── config
│   ├── uploads
│   └── utils
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/rana-ji0001/Cartivo.git
```

---

### Backend

```bash
cd server

npm install

npm run dev
```

---

### Frontend

```bash
cd client

npm install

npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=3000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY

EMAIL=YOUR_EMAIL
EMAIL_PASSWORD=YOUR_EMAIL_PASSWORD

CLOUDINARY_CLOUD_NAME=YOUR_CLOUD_NAME
CLOUDINARY_API_KEY=YOUR_API_KEY
CLOUDINARY_API_SECRET=YOUR_API_SECRET
```

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |
| POST | /api/auth/logout | Logout User |
| POST | /api/auth/verify-email | Verify OTP |

---

### Products

| Method | Endpoint |
|---------|----------|
| GET | /api/products |
| GET | /api/products/:id |
| POST | /api/products |
| PUT | /api/products/:id |
| DELETE | /api/products/:id |

---

### Cart

| Method | Endpoint |
|---------|----------|
| POST | /api/cart |
| GET | /api/cart |
| DELETE | /api/cart/:id |

---

## 🔒 Security

- JWT Authentication
- Protected Routes
- Admin Authorization
- Password Hashing
- HTTP Only Cookies
- Input Validation
- Secure File Upload

---

## 📸 Screenshots

### Home Page

_Add your screenshot here_

---

### Product Details

_Add your screenshot here_

---

### Login

_Add your screenshot here_

---

### Register

_Add your screenshot here_

---

### Admin Dashboard

_Add your screenshot here_

---

## 🚀 Future Improvements

- Wishlist
- Order Management
- Razorpay/Stripe Payment Gateway
- User Profile
- Order History
- Product Reviews
- Ratings
- Coupon System
- Address Management
- Dark/Light Theme Toggle
- Sales Analytics
- Recommendation System

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push changes

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 👨‍💻 Author

**Karan Rana**

GitHub: https://github.com/rana-ji0001

LinkedIn: *(Add your LinkedIn URL)*

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

Happy Coding! 🚀