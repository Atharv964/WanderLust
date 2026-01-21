# 🌍 WanderLust

**WanderLust** is a full-stack travel listing web application that allows users to explore and interact with unique accommodations — from cozy cabins to luxury resorts. The app features category filtering, interactive maps, cloud-hosted images, reviews, and a fully responsive design.  

---

## ⭐ Table of Contents

1. [✨ Features](#-features)  
2. [🛠 Technologies Used](#-technologies-used)  
3. [📂 Project Structure](#-project-structure)  
4. [💾 Database Schema](#-database-schema)  
5. [⚡ Installation](#-installation)  
6. [🚀 Usage](#-usage)  
7. [🖼 Screenshots](#-screenshots)  
8. [☁️ Deployment](#-deployment)  
9. [⚠️ Known Issues / Warnings](#-known-issues--warnings)  
10. [🤝 Contributing](#-contributing)  
11. [📄 License](#-license)  

---

## ✨ Features

- ⭐ **Dynamic Listings**: Each listing has title, description, images, category, location, and reviews.  
- ⭐ **Category Filtering & Search**: Filter listings by categories like *Trending*, *Amazing Pools*, etc.  
- ⭐ **Interactive Map**: Map plotting of all listings using **Mapbox**.  
- ⭐ **Responsive Design**: Fully responsive for desktop, tablet, and mobile.  
- ⭐ **Cloud-based Images**: Hosted on **Cloudinary** for fast, reliable delivery.  
- ⭐ **User Authentication**: Signup/login with sessions and flash messages.  
- ⭐ **Reviews**: Users can post and manage reviews for listings.  
- ⭐ **Error Handling**: Centralized custom error handling.  

---

## 🛠 Technologies Used

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB via MongoDB Atlas  
- **ORM**: Mongoose  
- **Frontend**: EJS templates, HTML5, CSS3, JavaScript  
- **Cloud Hosting**: Cloudinary for images  
- **Maps**: Mapbox API for interactive location maps  
- **Utilities**: Express-session, connect-flash, custom middleware  
- **Development Tools**: VS Code, Git, npm  

---

## 📂 Project Structure

WanderLust/
├── app.js # Main application entry
├── cloudConfig.js # Cloudinary configuration
├── middleware.js # Custom middleware (auth, error handling)
├── package.json
├── package-lock.json
├── schema.js # Joi validation schemas
├── controller/
│ ├── listing.js
│ ├── reviews.js
│ └── users.js
├── init/
│ ├── data.js # Seed data for listings
│ └── index.js # Script to seed DB
├── models/
│ ├── listing.js
│ ├── review.js
│ └── user.js
├── public/
│ ├── css/
│ │ ├── rating.css
│ │ └── style.css
│ └── js/
│ ├── map.js
│ └── script.js
├── routes/
│ ├── listing.js
│ ├── review.js
│ └── user.js
├── utils/
│ ├── ExpressError.js # Custom error class
│ └── wrapAsync.js # Async wrapper
└── views/
├── error.ejs
├── includes/
│ ├── flash.ejs
│ ├── footer.ejs
│ └── navbar.ejs
├── layouts/
│ └── boilerplate.ejs
├── listings/
│ ├── edit.ejs
│ ├── index.ejs
│ ├── new.ejs
│ └── show.ejs
└── user/
├── login.ejs
└── signup.ejs


---

## 💾 Database Schema

### Listing Schema

```js
const ListingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: [{ url: String, filename: String }],
  category: {
    type: String,
    enum: ["Trending", "Amazing Pools", "Romantic", "Adventure"],
    required: true
  },
  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      required: true
    },
    coordinates: { type: [Number], required: true }
  },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }]
});

Review Schema

const ReviewSchema = new mongoose.Schema({
  rating: { type: Number, min: 1, max: 5, required: true },
  body: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

User Schema

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});

⚡ Installation

    Clone the repository

git clone https://github.com/Atharv964/wanderlust.git
cd wanderlust

    Install dependencies

npm install

    Set up environment variables

Create a .env file in the root directory:

DB_URL=your_mongoDB_Atlas_URI
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_secret
MAPBOX_TOKEN=your_mapbox_token
SECRET=session_secret_key

    Seed the database (optional)

node init/index.js

    Start the server

node app.js

    Open http://localhost:3000
    in your browser

🚀 Usage

    Browse listings on the homepage

    Filter listings by category

    View listing locations on an interactive map

    Signup/login to post reviews

    Add new listings by modifying init/data.js

🖼 Screenshots


![Homepage](./public/images/homepage.png)
![Map View](./public/images/map.png)
![Listing Show Page](./public/images/showpage.png)

☁️ Deployment

    Images hosted on Cloudinary

    Database hosted on MongoDB Atlas

    Map functionality via Mapbox

    Fully deployable on platforms like Render or Heroku

⚠️ Known Issues / Warnings

    CRLF warnings on Git (Windows): Normal, harmless

    Mongoose ValidationError: Ensure geometry.type and category values are valid

    Mapbox: Requires a valid API token

🤝 Contributing

    Fork the repo

    Create a branch: git checkout -b feature-name

    Make changes and commit: git commit -m "Description"

    Push: git push origin feature-name

    Open a Pull Request

📄 License

This project is licensed under the MIT License