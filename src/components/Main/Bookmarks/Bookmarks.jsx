import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readTime }) => {
  console.log(bookmarks);
  return (
    <div>
      <div className="bg-purple-100 rounded-xl p-4 border border-purple-800">
        <h3 className="text-3xl text-purple-800 font-bold text-center">
          Spent time on read : {readTime}min
        </h3>
      </div>
      <div className="bg-gray-100 rounded-xl p-4 mt-4">
        <h3 className="text-3xl font-bold text-center">
          Bookmarked Blogs: {bookmarks.length}
        </h3>
        {bookmarks.map((bookmark, index) => (
          <Bookmark key={index} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.prototype = {
  bookmarks: PropTypes.array,
  readTime: PropTypes.array,
};
export default Bookmarks;
