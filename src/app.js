const express = require("express");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
// const multer = require("multer");
// const { CloudinaryStorage } = require("multer-storage-cloudinary"); 

const skillRouter = require("./mongo/router/skillRouter");
const portfolioRouter = require("./mongo/router/portfolioRouter");
const { connectDB } = require("./mongo/connection");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Use CloudinaryStorage with Multer
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "portfolio", // Change this to your desired folder
//     format: async (req, file) => "jpg", // You can change the format if needed
//     public_id: (req, file) => file.fieldname + "-" + Date.now(),
//   },
// });

// const upload = multer({ storage: storage });
const app = express();
app.use(cors());
app.use(express.json());
app.use("/my-work", portfolioRouter);
app.use("/my-skills", skillRouter);

if (process.env.MONGO_URL) {
  connectDB().then(() => console.log("Connected to database"));
}

module.exports = app;