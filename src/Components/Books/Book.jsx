import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const Book = ({ item }) => {
  return (
    <div className="h-fit flex flex-row md:flex-col max-w-sm rounded overflow-hidden shadow-lg bg-ltWhite text-ltBlueDeep">
      <div className="h-[280px] md:h-[350px]">
        <img className="w-full h-full" src={item.image} alt="" />
      </div>
      <div className="h-64 px-2 md:px-4 py-4 space-y-2 flex flex-col justify-between">
        <div className="font-bold text-lg mb-2">
          {item.name.slice(0, 25)}...
        </div>
        <p className="text-sm">Author: {item.author.slice(0, 15)}...</p>
        <p className="text-sm">Category: {item.category.slice(0, 15)}...</p>
        <ReactStars value={item.rating} count={5} size={24}></ReactStars>
        <Link to={`/bookdetails/${item._id}`}>
          <button className="btnlt w-full">Details</button>
        </Link>
      </div>
    </div>
  );
};

Book.propTypes = {
  item: PropTypes.object.isRequired,
};
export default Book;
