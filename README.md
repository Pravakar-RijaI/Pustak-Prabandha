# Pustak Prabandha 📚

Pustak Prabandha is a MERN-stack-based Library Management System (LMS) designed to enhance user experience with seamless book browsing, requesting, and monitoring features. It incorporates AI-driven functionalities, semantic search, and personalized recommendations to improve book discovery and user engagement.

## Features

### Admin Features
- **Book Management**: Add, update, and remove books.
- **User Management**: View user details, track borrowed books, and manage transactions.
- **Book Requests**: Approve or reject book requests, update book status, and handle lost book reports.
- **Fine & Payment System**: Automatic fine calculation for overdue books and lost books, with eSewa integration for online payments.
- **Notifications**: Send alerts for book availability, due dates, fines, and request status.

### Client Features
- **Book Search & Discovery**: AI-powered semantic search and content-based recommendation system.
- **Book Borrowing**: Request books and track borrowed items.
- **Profile Management**: Update personal information and view book history.
- **Notifications**: Receive updates on due dates, fines, and book availability.
- **Payments**: Pay fines through eSewa.

## Version Specifications
1. NodeJS : v18.16.0
2. Express : v4.18.2
3. ReactJS : v18.2.0
4. MongoDB: v6.0.6
5. Mongosh: v2.0.2

## Installation Guide

### How to run the project locally

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/Pravakar-RijaI/Pustak-Prabandha.git
   ```
2. **Navigate to Both 'Frontend' and 'Backend' Folders**:
   ```sh
   cd frontend  
   cd backend
   ```
3. **Install Dependencies**:
   ```sh
   npm install
   ```
4. **Start the Frontend and Backend**:
   ```sh
   npm run dev
   ```

5. **Database Setup (MongoDB)**:
   - Ensure MongoDB is running.
   - Open MongoDB Compass (if not installed, download it).
   - Import JSON files from the `mongoDatabase` folder into respective collections.

   ```sh
   Import respective .JSON file into database Collection
   ```
   
## Login Credentials

Starter Login Credentials (Ensure database collections are imported):

1. **Admin User (user_type = "admin_user")**:
   ```
   Email : admin@gmail.com  
   Password : admin
   ```

2. **Normal User (user_type = "normal_user")**:
   - Can be created through the Sign-Up page.

## Lessons Learned

1. Code comments are love letters you leave behind for your future self.
2. If you can't solve it now, document it for your future self – they might have the answer!

## Tech Stack

**Frontend:** React, Bootstrap

**Backend:** Node, Express, MongoDB

## Contributors

Developed By:

1. <a href="https://github.com/Pravakar-RijaI">Pravakar Rijal</a>
2. <a href="https://github.com/ManishDhungana758">Manish Dhungana</a>
3. <a href="https://github.com/AkashTolange">Akash Tolange</a>

For any issues or suggestions, please open an issue on the [GitHub repository](https://github.com/Pravakar-RijaI/Pustak-Prabandha).

