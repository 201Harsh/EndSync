# EndSync User Authentication Guide

Welcome to the **EndSync** authentication system. This guide covers user registration, OTP verification, login, and logout functionalities.

---

## Features

- **User Registration**  
    Secure sign-up with email and password.

- **OTP Verification**  
    Email-based One-Time Password (OTP) verification for account activation.

- **User Login**  
    Authenticate with verified credentials.

- **User Logout**  
    Securely end user sessions.

---

## 1. Registering a User

1. **Navigate to Registration Page:**  
     Go to `/register` or click the "Sign Up" button.

2. **Fill Registration Form:**  
     - Enter your email address.
     - Create a strong password.
     - Confirm your password.

3. **Submit:**  
     Click the "Register" button.  
     You will receive an OTP on your registered email.

---

## 2. Verifying Account via OTP

1. **Check Your Email:**  
     Look for an email from EndSync containing your OTP.

2. **Enter OTP:**  
     - Go to the OTP verification page (`/verify-otp`).
     - Input the OTP received.

3. **Verify:**  
     Click "Verify".  
     If successful, your account is now active.

---

## 3. Logging In

1. **Navigate to Login Page:**  
     Go to `/login`.

2. **Enter Credentials:**  
     - Email address
     - Password

3. **Submit:**  
     Click "Login".  
     Upon success, you will be redirected to your dashboard.

---

## 4. Logging Out

1. **Click Logout:**  
     Use the "Logout" button in the navigation bar or user menu.

2. **Session Ended:**  
     You will be securely logged out and redirected to the login page.

---

## Security Notes

- Passwords are securely hashed.
- OTPs expire after a limited time for enhanced security.
- Multiple failed login attempts may result in temporary account lockout.

---

For support, contact [support@endsync.com](mailto:support@endsync.com).

---