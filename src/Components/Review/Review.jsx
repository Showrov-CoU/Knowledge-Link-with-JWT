// import { useEffect } from "react";
import reviewer1 from "../../../src/assets/Banner/r1.jpg";
import reviewer2 from "../../../src/assets/Banner/r2.jpg";
import reviewer3 from "../../../src/assets/Banner/r3.jpg";
import reviewer4 from "../../../src/assets/Banner/r4.jpg";
// import reviewer3 from "../assets/Reviewer/r3.jpg";
// import reviewer4 from "../assets/Reviewer/r4.jpg";
// import reviewer5 from "../assets/Reviewer/r5.jpg";
// import reviewer6 from "../assets/Reviewer/r6.jpg";

// import Aos from "aos";
// import "aos/dist/aos.css";

const Review = () => {
  //   useEffect(() => {
  //     Aos.init();
  //   }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5 py-5 px-5 text-ltBlueDeep dark:text-dkBeige">
      <div className="flex flex-col gap-3 border-2 border-solid border-gray-400 p-5 rounded-xl">
        <div className="flex justify-start gap-3">
          <div className="w-12 h-12 rounded-full">
            <img src={reviewer1} className="w-full h-full rounded-full " />
          </div>
          <div>
            <p className="font-bold">John Doe</p>
            <p className="text-sm">Happy Client</p>
          </div>
        </div>
        <p className="text-sm md:text-base text-justify">
          &quot;This library management website has truly transformed the way we
          run our library. It&apos;s user-friendly, efficient, and packed with
          features that make our daily tasks a breeze. It&apos;s a game-changer
          for librarians and a joy for library users.&quot;
        </p>
      </div>
      <div className="flex flex-col gap-3 border-2 border-solid border-gray-400  p-5 rounded-xl">
        <div className="flex justify-start gap-3">
          <div className="w-12 h-12 rounded-full">
            <img src={reviewer2} className="w-full h-full rounded-full " />
          </div>
          <div>
            <p className="font-bold">AR Showrov</p>
            <p className="text-sm">Happy Client</p>
          </div>
        </div>
        <p className="text-sm md:text-base text-justify">
          &quot;I can&apos;t say enough good things about this library
          management website. It&apos;s brought our library into the digital
          age, making cataloging, searching, and borrowing books incredibly
          convenient. The team behind it is top-notch, always ready to assist.
          Highly recommended!&quot;
        </p>
      </div>
      <div className="flex flex-col gap-3 border-2 border-solid border-gray-400  p-5 rounded-xl">
        <div className="flex justify-start gap-3">
          <div className="w-12 h-12 rounded-full">
            <img src={reviewer3} className="w-full h-full rounded-full " />
          </div>
          <div>
            <p className="font-bold">Ashikur Rahman</p>
            <p className="text-sm">Happy Client</p>
          </div>
        </div>
        <p className="text-sm md:text-base text-justify">
          &quot;As a devoted bookworm, I&apos;ve used many library websites, but
          this one stands out. The intuitive interface, quick search, and
          personalization options make it a true gem for any book lover.
          It&apos;s like having a world of knowledge at your fingertips.&quot;
        </p>
      </div>
      <div className="flex flex-col gap-3 border-2 border-solid border-gray-400  p-5 rounded-xl">
        <div className="flex justify-start gap-3">
          <div className="w-12 h-12 rounded-full">
            <img src={reviewer4} className="w-full h-full rounded-full " />
          </div>
          <div>
            <p className="font-bold">Atlee Kumar</p>
            <p className="text-sm">Happy Client</p>
          </div>
        </div>
        <p className="text-sm md:text-base">
          &quot;This library management website has redefined the library
          experience for us. It&apos;s not just about books; it&apos;s about
          connecting with a community of readers and learners. The seamless
          integration of resources, user-friendly design, and exceptional
          support make it an invaluable tool for libraries of all sizes&aqot;
        </p>
      </div>
    </div>
  );
};

export default Review;
