import express from 'express';
import { addblog, deleteBlog, getAllBlogs, getById, getByUserId, updateBlog } from '../controller/blog-controller.js';

const blogRouter = express.Router();

blogRouter.get("/blogs", getAllBlogs);
blogRouter.post("/add",addblog);

blogRouter.put("/update/:id",updateBlog);

blogRouter.get("/:id",getById);

blogRouter.delete("/delete/:id",deleteBlog);

blogRouter.get("/user/:id",getByUserId);

export default blogRouter;