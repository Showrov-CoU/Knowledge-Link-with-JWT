// import { useEffect } from "react";
import aboutus from "../../../src/assets/Banner/about.jpg";
// import Aos from "aos";
// import "aos/dist/aos.css";

const AboutUs = () => {
  //   useEffect(() => {
  //     Aos.init();
  //   }, []);
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-5 bg-ltBgSecondary dark:bg-dkBgSecondary text-ltBlueDeep dark:text-dkBeige py-5 px-5">
      <div className="md:w-[40%] h-full" data-aos="slide-right">
        <img
          className="w-full h-full rounded-lg border-2 border-solid"
          src={aboutus}
          alt=""
        />
      </div>
      <div className="space-y-6 md:w-[60%]" data-aos="slide-left">
        <div className="space-y-1">
          <h1 className="text-center text-xl md:text-2xl font-bold">
            Who are we?
          </h1>
          <p className="text-sm text-justify md:text-base">
            Our library management website is designed to empower librarians and
            library users by providing innovative tools and solutions for
            efficient and enjoyable library services.
          </p>
        </div>
        <div className="space-y-1">
          <h1 className="text-center text-xl md:text-2xl font-bold">
            Our Vision
          </h1>
          <p className="text-sm text-justify md:text-base">
            We are a dedicated team of library enthusiasts committed to
            simplifying and enhancing the library experience. Our library
            management website is designed to empower librarians and library
          </p>
        </div>
        <div className="space-y-1">
          <h1 className="text-center text-xl md:text-2xl font-bold">
            Our Mission
          </h1>
          <p className="text-sm text-justify md:text-base">
            Our library management website is designed to empower librarians and
            library users by providing innovative tools and solutions for
            efficient and enjoyable library services. We aim to foster a strong
            sense of community and knowledge sharing through our platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
