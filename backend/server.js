const express = require("express");
require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db_config");
const multer = require("multer");
// const upload = multer({dest : "uploads/"})
const app = express();
const PORT = process.env.PORT || 5000;



// DB Connection

connectDB();

// Body Parser

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get("/", (req,res) => {
  res.json({
    message : "Welcome To Blog API 1.0",
  });
});

// Upload Route

const storage = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null , "uploads/");
  },
  filename: (req,file,cb)=>{
    cb(null , "my-file" + Date.now() + " - " + file.originalname);
  },
});

const uploads = multer({storage});

// time-stemp

app.use("/uploads", uploads.single("file") ,(req, res)=>{
  console.log(req.file);

  res.send("File Uploaded");
})


// Blog Routes

app.use("/api/blog" , require("./routes/blogs/blogRoutes"));


app.listen(PORT , () => {
  console.log(`Server is running at ${PORT}`.bgBlue);
});