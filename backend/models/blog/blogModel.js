const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({

  title : {
    type : String,
    required : true
  },
  description : {
    type : String,
    required : true
  },
  isPublished : {
    type : Boolean,
    required : true,
    default : false
  },
  author : {
    type : String,
    required : false,
    default : "Admin"
  },
  // coverImage : {
  //   type : String,
  //   required : true
  // },


},{
  timestamps : true,
})


module.exports = mongoose.model("Blog", blogSchema)


// Read Documentaion

//1.     Multer Dependency ---> npmjs.com/package/multer
    // * A *  --> mimetype  -- Mime type of the file 