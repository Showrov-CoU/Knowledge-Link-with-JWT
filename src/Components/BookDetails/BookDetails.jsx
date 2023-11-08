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
      } else {
        toast.error("You have already borrowed this book");
      }
    });
  };

  return (
    <div className="bg-ltBgSecondary dark:bg-dkBgSecondary min-h-fit py-5">
      <div className="w-full h-[360px] md:flex px-5 md:px-20">
        <div
          className="h-[30rem] md:h-full md:w-52 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          //   style="background-image: url('/img/card-left.jpg')"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal bg-ltWhite">
          <div className="mb-8">
            <p className="text-sm text-ltBlueDeep flex items-center">
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p>
            <div className="text-ltBlueDeep font-bold text-xl mb-1">
              {item.name}
            </div>
            <p className="text-ltBlueDeep text-base text-justify mb-3">
              <span className="font-semibold">Category: </span>
              {item.category}
            </p>
            <p className="text-ltBlueDeep text-sm text-justify mb-2">
              {item.description}
            </p>
            <p className="text-ltBlueDeep text-base text-justify">
              <span className="font-semibold">Quantity: </span>
              {item.quantity}
            </p>
            <p className="text-ltBlueDeep text-base text-justify">
              <span className="font-semibold">Author: </span>
              {item.author}
            </p>
            <ReactStars value={item.rating} count={5} size={24}></ReactStars>
            <div className="flex justify-start gap-10 pt-2 z-10">
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btnlt"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Borrow
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  {/* <h3 className="font-bold text-lg">Hello!</h3> */}

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
                      {/* <form method="dialog">

                        </form> */}
                    </div>
                  </form>
                  <div className="modal-action mt-0">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btnlt">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
              <button className="btnlt">Read</button>
            </div>
          </div>

          {/* <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Jonathan Reinink</p>
              <p className="text-gray-600">Aug 18</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
