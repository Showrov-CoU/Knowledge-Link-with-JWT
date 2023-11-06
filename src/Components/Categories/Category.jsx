import PropTypes from "prop-types";

const Category = ({ item }) => {
  console.log(item);
  return (
    <div className="card card-compact bg-ltWhite shadow-xl">
      <figure>
        <img className="h-full w-full" src={item.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.description}</p>
        <div className="card-actions justify-end">
          <button className="btnlt">See Books</button>
        </div>
      </div>
    </div>
  );
};

Category.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Category;
