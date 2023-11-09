import axios from "axios";
import { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((res) => setCategories(res.data));
  }, []);
  return (
    <div className="bg-ltBgSecondary dark:bg-dkBgSecondary text-ltBlueDeep dark:text-dkBeige py-5">
      <h1 className="text-center text-3xl font-bold">Our Categories</h1>
      <p className="text-center text-base font-medium pt-2">
        Dive into Our Six Book Categories <br className="inline md:block" /> for
        Endless Exploration.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 px-10 md:px-20 gap-5 pt-5 md:pt-8">
        {categories.map((item) => (
          <Category key={item._id} item={item}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
