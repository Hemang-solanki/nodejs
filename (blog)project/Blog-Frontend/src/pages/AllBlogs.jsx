import { useEffect, useState } from "react";
import axios from "axios";
import "./AllBlogs.css";

function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:8080/Blog/All");
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="all-blogs-container">
      <h1 className="all-blogs-title">All Blogs</h1>
      <div className="blogs-grid">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div className="blog-card" key={blog._id}>
              <img
                src={blog.image}
                alt={blog.title}
                className="blog-card-image"
              />
              <div className="blog-card-content">
                <h2 className="blog-card-title">{blog.title}</h2>
                <p className="blog-card-description">
                  {blog.description.slice(0, 100)}...
                </p>
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-blogs-message">No blogs available at the moment.</p>
        )}
      </div>
    </div>
  );
}

export default AllBlogs;
