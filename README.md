
# 🛠️ Password Reset - Authentication App - Backend  

> A **Node.js & Express.js** REST API for authentication and password reset with JWT & MongoDB.  

## 🛠️ Tech Stack  
- 🟢 Node.js  
- 🚀 Express.js  
- 🗄️ MongoDB + Mongoose  
- 🔑 JSON Web Token (JWT)  
- 📧 Nodemailer  
- 🔄 CORS (Cross-Origin Resource Sharing)  
- 🛡️ dotenv for environment variables  

## 📌 Features  
✅ User Registration & Login with JWT  
✅ Secure Password Hashing (without bcrypt)  
✅ Forgot & Reset Password with Token Expiry  
✅ Email-based Password Reset (via **Nodemailer**)  
✅ **CORS Handling** for frontend-backend communication  
✅ Proper **Error Handling & Validation**  


## 🚀 API Endpoints  

| Method | Endpoint                         | Description               | 
|--------|----------------------------------|---------------------------|
| POST   | `/api/users/register`           | Register a new user       |
| POST   | `/api/users/login`              | Login & get JWT token     |
| POST   | `/api/users/forgot-password`    | Send password reset email |
| POST   | `/api/users/reset-password/:token` | Reset password        |
