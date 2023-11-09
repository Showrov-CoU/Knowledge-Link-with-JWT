import { useLoaderData, useParams } from "react-router-dom";
import Book from "./Book";

const Books = () => {
  const data = useLoaderData();
  const { name } = useParams();
  console.log(name);
  return (
    <div className="bg-ltBgSecondary dark:bg-dkBgSecondary px-5 md:px-48 py-10">
      <p className="text-xl font-bold pb-5 text-ltBlueDeep dark:text-dkBeige">
        Category: {name}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        {data.map((item) => (
          <Book key={item._id} item={item}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
