import Slider from "./Slider";

const Banner = () => {
  return (
    <div className="w-full flex flex-col-reverse bg-ltBgPrimary py-5 px-5 gap-10 md:gap-5 md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-3 md:gap-5">
        <h1 className="text-3xl md:text-5xl font-extrabold text-ltBlueDeep md:text-justify">
          &quot;Unlock the Power <br className="hidden md:inline" /> of
          Knowledge&quot;
        </h1>
        <h3 className="text-lg md:text-xl font-bold text-ltBlueDeep">
          Efficient Management and Seamless User Experience
        </h3>
        <p className="text-justify text-sm text-ltBlueDeep">
          Revolutionize library operations, streamline resource access, and
          empower your patrons. Our modern management solution is your key to a
          smarter, more efficient library experience. Explore limitless
          possibilities for your library and embrace the future of information
          management today.
        </p>
        <button className="btnlt w-fit">Register</button>
      </div>
      <div className="w-full md:w-1/2" id="app">
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Banner;
