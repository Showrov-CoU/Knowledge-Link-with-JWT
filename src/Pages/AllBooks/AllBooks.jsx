import { useLoaderData } from "react-router-dom";
import SingleBook from "./SingleBook";

const AllBooks = () => {
  const allbooks = useLoaderData();
  //console.log(allbooks);
  return (
    <div className="bg-ltBgSecondary dark:bg-dkBgSecondary px-5 md:px-24 py-10">
      <h1 className="text-xl font-bold pb-5 text-ltBlueDeep dark:text-dkBeige">
        All Books
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 ">
        {allbooks.map((item) => (
          <SingleBook key={item._id} item={item}></SingleBook>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
