const Blog = require("../../models/blog/blogModel");



//Get All Blogs 

const getBlogs = async(req , res) => {
  // res.send("All Blogs!!")

  const allBlogs = await Blog.find();
  if(!allBlogs){
    res.status(404)
    throw new Error("No Blogs Found");
  }
  res.json(allBlogs);
}


// Get Single Blog

const getSingleBlog = async(req , res) => {
  // res.send("Single Blogs!!")

  const singleBlog = await Blog.findById(req.params.blogID);

  if(!singleBlog){
    res.json(404)
    throw new Error("No Found Single Blog")
  }
  res.json(singleBlog);
}


// Create Blog

const addBlog = async(req , res) => {
  // res.send("Add Blog!!")
  // console.log(req.body);

  const {title , description, author} = req.body;

  if(!title || !description || !author){
    res.status(404);
    res.json({
      error : "Please Fill All Destails."
    });
  }

  // console.log(req.file.path)

  // res.send("Blog Saved!!");

  const newBlog = await  Blog.create({
    title,
    description,
    author,
    // coverImage : req.file.path,
  });

  if(!newBlog){
    res.status(401).json({
      msg : "Cannot Create Blog.",
    })
  }

  res.status(201).json(newBlog)
}

// Update Blog

const updateBlog = async(req , res) => {
  // res.send("Update Blog!!")
  // res.send(`${req.params.blogID} is updated!`)

  const updateBlog = await Blog.findByIdAndUpdate(req.params.blogID , req.body , {new : true});

  if(!updateBlog){
    res.status(400).json({
      msg : "Cannot Update Blog.",
    })
  }

  res.status(200).json(updateBlog)

}


// Delete Blog

const deleteBlog = async(req , res) => {
  // res.send("Delete Blog!!")

  const removeBlog = await Blog.findByIdAndDelete(req.params.blogID);


  if(!removeBlog){
    res.status(400).json({
      message : "Unable To Delete",
    })
  }
  console.log(removeBlog);

  res.json({
  success : true,
  })
}


module.exports = {
  addBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
  getSingleBlog,
}