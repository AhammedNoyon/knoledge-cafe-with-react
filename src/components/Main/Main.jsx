import { useState } from "react";
import Blogs from "./Blogs/Blogs";
import Bookmarks from "./Bookmarks/Bookmarks";
const Main = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState([]);
  const handleBookmarkBtn = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  const handleMarkAsRead = (read) => {
    const { reading_time } = read;
    // console.log("mark is read is clicked", read);
    const newReadTime = Number(readTime) + Number(reading_time);
    setReadTime(newReadTime);
  };
  // console.log(bookmarks);
  return (
    <>
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleBookmarkBtn={handleBookmarkBtn}
        ></Blogs>
        <Bookmarks readTime={readTime} bookmarks={bookmarks}></Bookmarks>
        {/* <div>
          {bookmarks.map((bookmark, index) => {
            return <Bookmarks key={index} bookmark={bookmark}></Bookmarks>;
          })}
        </div> */}
      </main>
    </>
  );
};

export default Main;
