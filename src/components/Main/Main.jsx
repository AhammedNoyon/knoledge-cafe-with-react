import Blogs from "./Blogs/Blogs";
import Bookmarks from "./Bookmarks/Bookmarks";
const Main = () => {
  return (
    <>
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </>
  );
};

export default Main;
