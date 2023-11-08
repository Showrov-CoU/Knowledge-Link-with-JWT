import AboutUs from "../../Components/About Us/AboutUs";
import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import Review from "../../Components/Review/Review";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <Categories></Categories>
      </div>
      <div className="">
        <AboutUs></AboutUs>
      </div>
      <div className="bg-ltBgSecondary dark:bg-dkBgSecondary">
        <h1 className="text-2xl font-bold text-center pt-6 text-ltBlueDeep dark:text-dkBeige">
          Testimonial
        </h1>
        <Review></Review>
      </div>
    </div>
  );
};

export default Home;
