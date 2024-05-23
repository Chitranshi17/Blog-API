const express = require('express');
const { getBlogs, addBlog, deleteBlog, updateBlog, getSingleBlog } = require('../../controllers/blog/blogController');
const multer = require("multer");
// const upload = multer({ dest: 'uploads/' })



const router = express.Router()

// const storage = multer.diskStorage({
//   destination: (req,file,cb)=>{
//     cb(null , "uploads/");
//   },
//   filename: (req,file,cb)=>{
//     cb(null , "my-file" + Date.now() + " - " + file.originalname);
//   },
// });

// const uploads = 
// 
// multer({storage});

// get All BLogs
router.get("/", getBlogs)


// get single BLog
router.get("/:blogID", getSingleBlog)


// get update BLog
router.put("/:blogID",updateBlog)


// get delete BLog
router.delete("/:blogID", deleteBlog)


// get create BLogs
// router.post("/",uploads.single("coverImage"), addBlog)
router.post("/",addBlog)


module.exports = router;

