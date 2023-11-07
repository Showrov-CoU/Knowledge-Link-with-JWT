import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Category = ({ item }) => {
  //console.log(item);
  return (
    <div className="card card-compact bg-ltWhite text-ltBlueDeep shadow-xl">
      <figure>
        <img className="h-full w-full" src={item.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p className="text-justify">{item.description}</p>
        <div className="card-actions justify-end">
          <Link to={`/category/${item.name}`}>
            <button className="btnlt">See Books</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Category.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Category;
