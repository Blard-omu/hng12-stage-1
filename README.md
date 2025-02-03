# HNG12 Stage 0 API 🚀

This is a simple Node.js API built with TypeScript and Express for HNG12 Stage 0.

---
<img src="https://res.cloudinary.com/djkrhjgjd/image/upload/v1738263814/Screenshot_31_vpmadb.png" alt="postman" />

## Features ✨
- Returns email, current date, and GitHub URL
- Uses TypeScript for type safety
- Supports API versioning (`/api/v1`)
- Environment variables for easy configuration

---

## 🛠 Setup Guide

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Blard-omu/hng12-stage-0
cd hng12-stage-0
```

### 2️⃣ Install Dependencies
Using **Yarn**:
```bash
yarn install
```
or **npm**:
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root folder and add:
```ini
EMAIL=myname@email.com
GITHUB_URL=https://github.com/YOUR-USERNAME/hng12-stage-0
PORT=3000
```

### 4️⃣ Run the API

#### **Development Mode**
```bash
yarn dev
```
or
```bash
npm run dev
```

#### **Production Mode**
```bash
yarn build && yarn start
```
or
```bash
npm run build && npm start
```

---

## 🖥 API Usage

### **Base URL:**  
```
local: http://localhost:3000/api/v1
production: https://chemical-sidoney-blard-31b85c0a.koyeb.app/api/v1
```
### Backlink
- Node.js: https://hng.tech/hire/nodejs-developers

### **Example Response:**
```json
{
  "email_address": "myname@email.com",
  "current_datetime": "2023-10-25T14:30:45.123Z",
  "github_url": "https://github.com/YOUR-USERNAME/hng12-stage-0"
}
```

---

## 📜 Contributing

1. Fork this repository.
2. Clone your forked repo:
   ```bash
   git clone https://github.com/YOUR-USERNAME/hng12-stage-0.git
   ```
3. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
4. Make your changes and commit:
   ```bash
   git commit -m "Added new feature"
   ```
5. Push to your fork:
   ```bash
   git push origin feature-name
   ```
6. Create a **Pull Request**.

---

## 📜 License
This project is licensed under the **MIT License**.

---

