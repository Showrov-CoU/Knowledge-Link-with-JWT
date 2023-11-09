// import { useLoaderData } from "react-router-dom";
import SingleBook from "./SingleBook";

import { useEffect, useState } from "react";

const AllBooks = () => {
  // const allbooks = useLoaderData();
  const [allbooks, setAllBooks] = useState([]);
  useEffect(() => {
    // axios
    //   .get("https://knowledge-link-server-bl3dxz0vd.vercel.app/books")
    //   .then((res) => setAllBooks(res.data));
    fetch("https://knowledge-link-server-bl3dxz0vd.vercel.app/books")
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data);
        console.log(data);
      });
  }, []);
  console.log(allbooks);
  const handleSort = () => {
    fetch(`https://knowledge-link-server-bl3dxz0vd.vercel.app/filter`)
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
    // axios
    //   .get(`https://knowledge-link-server-bl3dxz0vd.vercel.app/filterName`)
    //   .then((res) => setAllBooks(res.data));
  };
  //console.log(allbooks);
  return (
    <div className="bg-ltBgSecondary dark:bg-dkBgSecondary px-5 md:px-24 py-10 min-h-96">
      <div className="flex items-center gap-5 md:gap-10 pb-3">
        <h1 className=" text-xl font-bold text-ltBlueDeep dark:text-dkBeige">
          All Books
        </h1>
        <div className="dropdown">
          <label tabIndex={0} className="btnlt m-1">
            Filter
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu shadow bg-ltBlueDeep rounded-box w-52"
          >
            <li>
              <a
                className="bg-ltBlueDeep dark:bg-dkCoral text-white hover:text-ltWhite"
                onClick={handleSort}
              >
                Filter by Quantity
              </a>
              {/* <a
                className="bg-ltBlueDeep dark:bg-dkCoral text-ltWhite hover:text-ltWhite"
                onClick={() => handleSort("rating", -1)}
              >
                Filter by Rating
              </a> */}
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 ">
        {allbooks?.map((item) => (
          <SingleBook key={item._id} item={item}></SingleBook>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
