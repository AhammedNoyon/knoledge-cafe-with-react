import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
  console.log(bookmark);
  const { title } = bookmark;
  return (
    <div className="bg-white p-4 rounded-xl my-4 text-2xl font-bold">
      <h3 className="w-11/12 ">{title}</h3>
    </div>
  );
};

Bookmark.prototype = {
  bookmark: PropTypes.object,
};
export default Bookmark;
