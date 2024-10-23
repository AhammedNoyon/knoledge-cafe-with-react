import { useState } from "react";
import Blogs from "./Blogs/Blogs";
import Bookmarks from "./Bookmarks/Bookmarks";
const Main = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmarkBtn = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  console.log(bookmarks);
  return (
    <>
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Blogs handleBookmarkBtn={handleBookmarkBtn}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
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
