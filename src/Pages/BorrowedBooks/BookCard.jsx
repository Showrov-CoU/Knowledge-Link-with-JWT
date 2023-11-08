import PropTypes from "prop-types";

const BookCard = ({ item, handleReturn }) => {
  //   console.log(item);

  return (
    <div className="card h-80 card-side bg-ltWhite rounded-none">
      <figure className="w-2/4 rounded-none">
        <img className="h-full w-full" src={item.image} alt="Movie" />
      </figure>
      <div className="card-body w-3/4 ">
        <h2 className="card-title text-justify text-ltBlueDeep">
          {item.bookName.slice(0, 40)}...
        </h2>
        <p className="text-ltBlueDeep">{item.category}</p>
        <p className="text-sm text-ltBlueDeep">
          <span className="font-bold ">Borrowed Date: </span>
          {item.borrowedDate}
        </p>
        <p className="text-sm text-ltBlueDeep">
          <span className="font-bold ">Return Date: </span>
          {item.returnDate}
        </p>
        <div className="card-actions justify-end">
          <button className="btnlt" onClick={() => handleReturn(item._id)}>
            Return Book
          </button>
        </div>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  item: PropTypes.object.isRequired,
  handleReturn: PropTypes.func,
};

export default BookCard;
