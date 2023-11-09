import { Link, useLoaderData } from "react-router-dom";

const Read = () => {
  const item = useLoaderData();
  const { content } = item;
  console.log(content);
  return (
    <div className="px-0 md:px-40  flex justify-center items-center  bg-ltBgSecondary dark:bg-dkBgSecondary md:h-[90vh] ">
      <div className="text-ltBlueDeep dark:text-dkBeige leading-relaxed w-full md:w-[70%] px-5 py-10 md:p-5">
        <p className="text-xl text-justify">
          <span className="font-semibold">Book Name: </span>
          {item.name}
        </p>
        <p className="text-xs pb-5">
          <span className="font-semibold">Author: </span>
          {item.author}
        </p>
        <div className="space-y-5">
          {content.map((chapter, idx) => (
            <div key={idx}>
              <p className="text-sm pb-2">
                <span className="font-bold">Chapter Name: </span>
                {chapter.chapterName}
              </p>
              <p className="text-sm text-justify leading-relaxed">
                {chapter.summary}
              </p>
            </div>
          ))}
        </div>
        <p className="pt-4">
          <Link to={`/bookdetails/${item._id}`}>
            <button className="btnlt">Back</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Read;
