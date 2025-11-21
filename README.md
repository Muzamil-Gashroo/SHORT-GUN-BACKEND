#  SHORT-GUN-BACKEND

Backend API for the **SHORT-GUN** project.  
Frontend repository:  
> https://github.com/Muzamil-Gashroo/SHORT-GUN

---

## Tech Stack

- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- Cloudinary  
- Vite + React Frontend (separate repo)

---

##  Features

- Shorten any URL  
- Generate unique short codes  
- Generate QR codes  
- Store and fetch URLs using MongoDB  
- Cloudinary upload support  
- Clean REST API structure

---

##  Project Structure

```
SHORT-GUN-BACKEND/
│── controllers/
│── models/
│── routes/
│── config/
│── utils/
│── server.js
│── package.json
│── .env
```

---

##  Environment Variables

Create a `.env` file at project root:

```
MONGO_URI=your_mongo_connection_string
CLOUDINARY_CLOUD_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx
BASE_URL=http://localhost:3000
```

---

##  Run Locally

Install dependencies:

```
npm install
```

Start server:

```
npm run start
```

Development mode:

```
npm run dev
```

Server URL:

```
http://localhost:3000
```

---

##  API Endpoints

### **POST /create/url**
Create shortened URL + QR Code.

**Request Body:**
```json
{
  "url": "https://example.com"
}
```

---

### **GET /:shortId**
Redirect to the original full URL.

---

##  Scripts

```
npm run dev         # nodemon development
```

---

## 📜 License

MIT License.
