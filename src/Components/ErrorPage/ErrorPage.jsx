import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="bg-ltBgPrimary text-ltBlueDeep ">
      {error.status === 404 && (
        <div className="h-screen flex flex-col gap-5 justify-center items-center">
          <p className="text-3xl font-extrabold">oppps..!! Page Not Found</p>
          <p className="text-xl font-bold">
            Click the button and go Back to home
          </p>
          <Link to="/">
            <button className="btnlt">GO HOME</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
