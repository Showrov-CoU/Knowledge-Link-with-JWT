// import { useLoaderData } from "react-router-dom";
// import useBooks from "../../Hooks/useBooks";
import { useEffect, useState } from "react";
import SingleBook from "./SingleBook";

const AllBooks = () => {
  // const allbooks = useLoaderData();
  const [allbooks, setAllBooks] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");

  const fetchBooks = async (sortBy) => {
    try {
      await fetch(`http://localhost:3000/books?sortBy=${sortBy}&order=desc`)
        .then((res) => res.json())
        .then((data) => setAllBooks(data));
    } catch (error) {
      console.log("error fetching books");
    }
  };

  // const handleSort = () => {
  //   fetch(`http://localhost:3000/filter`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  useEffect(() => {
    // axios
    //   .get("http://localhost:3000/books")
    //   .then((res) => setAllBooks(res.data));
    // fetch("http://localhost:3000/books")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setAllBooks(data);
    //     console.log(data);
    //   });
    if (selectedFilter) {
      fetchBooks(selectedFilter);
    } else {
      fetchBooks();
    }
  }, [selectedFilter]);
  // const { data: allbooks, isLoading, refetch } = useBooks();

  // if (loading) {
  //   return (
  //     <span className="block mx-auto mt-20 loading loading-dots loading-lg text-success"></span>
  //   );
  // }
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
                onClick={() => setSelectedFilter("quantity")}
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
