import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const BookDetails = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const item = useLoaderData();
  // console.log(item);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = currentDate.getMonth() + 1;
    const formatMonth = String(month).padStart(2, "0");

    const borrowedDate = `${year}-${formatMonth}-${day}`;
    const returnDate = form.date.value;
    const returnInfo = {
      name,
      id: item._id,
      email,
      borrowedDate,
      returnDate,
      image: item.image,
      bookName: item.name,
      category: item.category,
    };

    axios.post("http://localhost:3000/borrowed", returnInfo).then((res) => {
      console.log(res);
      if (res.data.insertedId) {
        toast.success("Book borrowed successfully.");
        form.reset();
      } else {
        if (res.data.quantity) {
          console.log("yes", item);
          toast.error("Book is not available for borrowing.");
        } else {
          toast.error("You have already borrowed this book");
        }
      }
    });
  };

  return (
    // <div className="bg-ltBgSecondary dark:bg-dkBgSecondary h-screen w-full p-5 md:px-20 md:flex">
    //   <div
    //     className="h-[30rem] md:h-full md:w-52 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
    //     //   style="background-image: url('/img/card-left.jpg')"
    //     style={{
    //       backgroundImage: `url(${item.image})`,
    //       backgroundPosition: "center",
    //       backgroundRepeat: "no-repeat",
    //       backgroundSize: "cover",
    //     }}
    //   ></div>
    //   <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal bg-ltWhite">
    //     <div className="mb-8">
    //       <div className="text-ltBlueDeep font-bold text-xl mb-1">
    //         {item.name}
    //       </div>
    //       <p className="text-ltBlueDeep text-base text-justify mb-3">
    //         <span className="font-semibold">Category: </span>
    //         {item.category}
    //       </p>
    //       <p className="text-ltBlueDeep text-sm text-justify mb-2">
    //         {item.description}
    //       </p>
    //       <p className="text-ltBlueDeep text-base text-justify">
    //         <span className="font-semibold">Quantity: </span>
    //         {item.quantity}
    //       </p>
    //       <p className="text-ltBlueDeep text-base text-justify">
    //         <span className="font-semibold">Author: </span>
    //         {item.author}
    //       </p>
    //       <ReactStars
    //         value={Number(item.rating)}
    //         count={5}
    //         size={24}
    //       ></ReactStars>
    //       <div className="flex justify-start gap-10 pt-2 z-10">
    //         <button
    //           className={
    //             item.quantity !== 0
    //               ? "btnlt"
    //               : "btnlt opacity-30 hover:opacity-30"
    //           }
    //           disabled={item.quantity !== 0 ? "" : "disabled"}
    //           onClick={() => document.getElementById("my_modal_5").showModal()}
    //         >
    //           Borrow
    //         </button>
    //         <dialog
    //           id="my_modal_5"
    //           className="modal modal-bottom sm:modal-middle"
    //         >
    //           <div className="modal-box">
    //             <form className="card-body" onSubmit={handleSubmit}>
    //               <div className="form-control">
    //                 <label className="label">
    //                   <span className="label-text">Name</span>
    //                 </label>
    //                 <input
    //                   type="name"
    //                   value={user.displayName}
    //                   name="name"
    //                   className="input input-bordered"
    //                   required
    //                 />
    //               </div>
    //               <div className="form-control">
    //                 <label className="label">
    //                   <span className="label-text">Email</span>
    //                 </label>
    //                 <input
    //                   type="email"
    //                   value={user.email}
    //                   name="email"
    //                   className="input input-bordered"
    //                   required
    //                 />
    //               </div>
    //               <div className="form-control">
    //                 <label className="label">
    //                   <span className="label-text">Return Date</span>
    //                 </label>
    //                 <input
    //                   type="date"
    //                   placeholder="date"
    //                   name="date"
    //                   className="input input-bordered"
    //                   required
    //                 />
    //               </div>
    //               <div className="modal-action form-control">
    //                 <button className="btnlt">Submit</button>
    //               </div>
    //             </form>
    //             <div className="modal-action mt-0">
    //               <form method="dialog">
    //                 <button className="btnlt">Close</button>
    //               </form>
    //             </div>
    //           </div>
    //         </dialog>
    //         <button className="btnlt">Read</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="bg-ltBgSecondary dark:bg-ltBlueDeep px-5 md:px-20 py-3 md:py-1">
      <div className="card flex flex-col md:flex-row card-side text-ltBlueDeep">
        <figure className=" w-full md:w-4/12 rounded-none">
          <img className="h-full w-full rounded-none" src={item.image} alt="Movie" />
        </figure>
        <div className="card-body w-full md:w-8/12 bg-ltWhite">
          <h2 className="card-title">{item.name}</h2>
          <p>
            <span className="font-semibold">By: </span>
            {item.author}
          </p>
          <p>
            <span className="font-semibold">Category: </span>
            {item.category}
          </p>
          <p className="text-sm text-justify">{item.description}</p>

          <p>
            <span className="font-semibold">Quantity: </span>
            {item.quantity}
          </p>
          <ReactStars
            value={Number(item.rating)}
            count={5}
            size={24}
          ></ReactStars>
          <div className="flex justify-start gap-10 pt-2 z-10">
            <button
              className={
                item.quantity !== 0
                  ? "btnlt"
                  : "btnlt opacity-30 hover:opacity-30"
              }
              disabled={item.quantity !== 0 ? "" : "disabled"}
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Borrow
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <form className="card-body" onSubmit={handleSubmit}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="name"
                      value={user.displayName}
                      name="name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      value={user.email}
                      name="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Return Date</span>
                    </label>
                    <input
                      type="date"
                      placeholder="date"
                      name="date"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="modal-action form-control">
                    <button className="btnlt">Submit</button>
                  </div>
                </form>
                <div className="modal-action mt-0">
                  <form method="dialog">
                    <button className="btnlt">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
            <button className="btnlt">Read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
