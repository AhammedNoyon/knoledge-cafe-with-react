import { FaRegBookmark } from "react-icons/fa6";
import PropTypes from "prop-types";
const Blog = ({ blog, handleBookmarkBtn, handleMarkAsRead }) => {
  const {
    id,
    cover,
    author,
    author_img,
    hashtags,
    posted_date,
    reading_time,
    title,
  } = blog;
  // console.log(
  //   id,
  //   cover,
  //   author,
  //   author_img,
  //   hashtags,
  //   posted_date,
  //   reading_time,
  //   title
  // );
  return (
    <>
      <div className="space-y-4 mb-10">
        <img className="w-full rounded-xl" src={cover} alt="" />
        <div className="flex justify-between items-center">
          <div className="flex  gap-2 items-center">
            <div>
              <img className="h-14" src={author_img} alt="" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{author}</h3>
              <p>{posted_date}</p>
            </div>
          </div>
          <div className="flex gap-2 items-center text-xl">
            <span>{reading_time} min read</span>
            <button onClick={() => handleBookmarkBtn(blog)} className="">
              <FaRegBookmark />
            </button>
          </div>
        </div>
        <h3 className="text-2xl lg:text-3xl w-full lg:w-3/4 font-bold">
          {title}
        </h3>
        <div className="text-gray-400 flex gap-4">
          <span>#{hashtags[0]}</span>
          <span>#{hashtags[1]}</span>
        </div>
        <button
          onClick={() => handleMarkAsRead(blog)}
          className="text-purple-800 underline text-xl"
        >
          Mark as read
        </button>
        <div className="border-b py-4"></div>
      </div>
    </>
  );
};
Blog.propTypes = {
  blog: PropTypes.object,
  handleBookmarkBtn: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
export default Blog;
