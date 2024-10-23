import { useState } from "react";
import { useEffect } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";
const Blogs = ({ handleBookmarkBtn, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  // console.log(blogs);
  return (
    <div className="lg:col-span-2">
      {blogs.map((blog) => {
        return (
          <Blog
            key={blog.id}
            blog={blog}
            handleBookmarkBtn={handleBookmarkBtn}
            handleMarkAsRead={handleMarkAsRead}
          ></Blog>
        );
      })}
    </div>
  );
};

Blogs.prototype = {
  handleBookmarkBtn: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
export default Blogs;
