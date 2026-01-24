
# 🌍 WanderLust

**WanderLust** is a full-stack travel listing web application that allows users to explore and interact with unique accommodations — from cozy cabins to luxury resorts.  
The app features category filtering, interactive maps, cloud-hosted images, reviews, and a fully responsive design.  



## ⭐ Table of Contents


1 [✨ Features](#-features)  
2 [🛠 Technologies Used](#-technologies-used)  
3 [📂 Project Structure](#-project-structure)  
4 [💾 Database Schema](#-database-schema)  
5 [⚡ Installation](#-installation)
6 [Dependencies](#-Dependencies)  
7 [API Reference](#-API-Reference)
8 [🚀 Usage](#-usage)    
9 [☁️ Deployment](#-deployment)  
10 [⚠️ Known Issues / Warnings](#-known-issues--warnings)  
11 [🤝 Contributing](#-contributing)  
## ✨ Features

⭐ **Dynamic Listings**: Each listing has title, description, images, category, location, and reviews.  

⭐ **Category Filtering & Search**: Filter listings by categories like *Trending*, *Amazing Pools*, etc.  

⭐ **Interactive Map**: Map plotting of all listings using **Mapbox**.  

⭐ **Responsive Design**: Fully responsive for desktop, tablet, and mobile.  

⭐ **Cloud-based Images**: Hosted on **Cloudinary** for fast, reliable delivery.  

⭐ **User Authentication**: Signup/login with sessions and flash messages.  

⭐ **Reviews**: Users can post and manage reviews for listings.  

⭐ **Error Handling**: Centralized custom error handling.  


## 🛠 Technologies Used

- **Backend**: Node.js, Express.js  

- **Database**: MongoDB via MongoDB Atlas  

- **ORM**: Mongoose  

- **Frontend**: EJS templates, HTML5, CSS3, JavaScript  

- **Cloud Hosting**: Cloudinary for images  

- **Maps**: Mapbox API for interactive location maps  

- **Utilities**: Express-session, connect-flash, custom middleware  

- **Development Tools**: VS Code, Git, npm  


## project-structure

```
WanderLust/
├── app.js
├── cloudConfig.js
├── middleware.js
├── package.json
├── package-lock.json
├── schema.js
├── controller/
│ ├── listing.js
│ ├── reviews.js
│ └── users.js
├── init/
│ ├── data.js
│ └── index.js
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
│ ├── ExpressError.js
│ └── wrapAsync.js
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
```
## database-schema

### Listing Schema

```
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
```

### Review Schema

```
const ReviewSchema = new mongoose.Schema({
  rating: { type: Number, min: 1, max: 5, required: true },
  body: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});
```

### User Schema

```
const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});
```

## Installation

1. Clone the repository

```bash
git clone https://github.com/Atharv964/wanderlust.git
cd wanderlust
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables
Create a ```.env``` file in the root directory:

```env
DB_URL=your_mongoDB_Atlas_URI
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_secret
MAPBOX_TOKEN=your_mapbox_token
SECRET=session_secret_key
```

4. Seed the database (optional)
```
node init/index.js
```
5. Start the server
```
node app.js
```
6. 6. Open your browser at `http://localhost:3000`




    
## Dependencies

```
npm install express mongoose ejs dotenv passport passport-local passport-local-mongoose \
express-session connect-mongo multer cloudinary multer-storage-cloudinary \
joi method-override connect-flash mapbox-gl @mapbox/mapbox-sdk
```

```
> Note: All dependencies are listed in `package.json`.  
> Use `npm install` to install them automatically.
```
- express: Web framework for building the server, routes, and middleware

- mongoose: Object Data Modeling (ODM) library for MongoDB

- ejs: Templating engine for rendering dynamic HTML views

- dotenv: Loads environment variables from a .env file

- passport: Authentication middleware for Node.js

- passport-local: Local username and password authentication strategy

- passport-local-mongoose: Simplifies password hashing and user authentication with Mongoose

- express-session: Manages user sessions

- connect-mongo: Stores session data in MongoDB

- multer: Handles multipart/form-data for file uploads

- cloudinary: Cloud-based image storage and optimization service

- multer-storage-cloudinary: Integrates Multer with Cloudinary for direct uploads

- joi: Server-side validation of request data

- method-override: Enables PUT and DELETE HTTP methods in HTML forms

- connect-flash: Displays flash success and error messages

- mapbox-gl: Renders interactive maps on listing pages

- @mapbox/mapbox-sdk: Provides geocoding and map-related services
## API Reference

### 📍 Listings API
#### Get all listings

```http
  GET /listings
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| - | - | Returns all listings |

#### Get a single listing

```http
  GET /listings/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Required. Listing ID |

#### Create a new listing

```http
  POST /listings
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | Listing title |
| `Description`      | `string` | Listing Description |
| `category`      | `string` | Listing category |
| `Price`      | `number` | Listing price |
| `location`      | `string` | Listing image |
| `image`      | `file` | Listing image |

#### Update a listing

```http
  PUT /listings/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` |Listing ID|

#### Delete a listing

```http
  DELETE /listings/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` |Listing ID|

### ⭐ Reviews API
#### Add a review

```http
  POST /listings/:id/reviews
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `rating`      | `number` |Rating (1–5)|
| `comment`      | `string` |Review text|

#### Delete a review

```http
  DELETE /listings/:id/reviews/:reviewId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `reviewId`      | `string` |Review ID|

### 👤 User Authentication API
#### Register user

```http
  POST /signup
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` |Unique username|
| `email`      | `string` |Unique email|
| `password`      | `string` |password|

#### Login user

```http
  POST /login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` |username|
| `password`      | `string` |password|

#### Logout user

```http
  GET /logout
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| -      | - |End user Session|

## Usage

- Browse listings on the homepage

- Filter listings by category

- View listing locations on an interactive map

- Signup/login to post reviews

- Add new listings by modifying ```init/data.js```


## Deployment

- Images hosted on Cloudinary

- Database hosted on MongoDB Atlas

- Map functionality via Mapbox

- Fully deployable on Render or Heroku

## ⚠️ Known Issues / Warnings

- CRLF warnings on Git (Windows): Normal, harmless

- Mongoose ValidationError: Ensure ```geometry.type``` and ```category``` values are valid

- Mapbox: Requires a valid API token
## Contributing

Contributions are always welcome!

a) Fork the repo

b) Create a branch: `git checkout -b feature-name`

c) Make changes and commit: `git commit -m "Description"`

d) Push: `git push origin feature-name`

e) Open a Pull Request




