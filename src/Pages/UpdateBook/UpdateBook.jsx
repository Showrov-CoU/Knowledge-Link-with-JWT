import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBook = () => {
  const item = useLoaderData();
  //console.log(item);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.photo.value;
    const name = form.name.value;
    const author = form.author.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const description = form.desc.value;

    const updateBook = {
      image,
      name,
      author,
      category,
      quantity,
      rating,
      description,
    };
    //console.log(updateBook);
    axios
      .put(`http://localhost:3000/books/${item._id}`, updateBook)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Book Updated successfully...!",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          }).then((result) => {
            if (result.isConfirmed) {
              form.reset();
            }
          });
        } else {
          Swal.fire({
            title: "Something is wrong! Please try again",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
  };
  return (
    <div className="space-y-2 py-10 bg-ltBgSecondary dark:bg-dkBgSecondary">
      <form onSubmit={handleUpdate} className="px-[5%] md:px-32 lg:px-52  ">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label htmlFor="" className="text-ltBlueDeep dark:text-dkBeige">
              Photo URL
            </label>
            <input
              required
              type="text"
              name="photo"
              placeholder="Image URL"
              defaultValue={item.image}
              className="input input-bordered input-success w-full block text-ltBlueDeep"
            />
          </div>
          <div>
            <label htmlFor="" className="text-ltBlueDeep dark:text-dkBeige">
              Book Name
            </label>
            <input
              required
              type="text"
              placeholder="Book Name"
              name="name"
              defaultValue={item.name.slice(0, 45)}
              className="input input-bordered input-success w-full block text-ltBlueDeep"
            />
          </div>
          <div>
            <label htmlFor="" className="text-ltBlueDeep dark:text-dkBeige">
              Author
            </label>
            <input
              required
              type="text"
              placeholder="Author Name"
              name="author"
              defaultValue={item.author}
              className="input input-bordered input-success w-full block text-ltBlueDeep"
            />
          </div>
          <div>
            <label htmlFor="" className="text-ltBlueDeep dark:text-dkBeige">
              Category
            </label>
            <select
              required
              name="category"
              defaultValue={item.category}
              className="select select-success w-full block text-ltBlueDeep"
            >
              <option value="0">Select Category</option>
              <option value="Computer and Tech">Computer and Tech</option>
              <option value="Business">Business</option>
              <option value="History">History</option>
              <option value="Boigraphies">Boigraphies</option>
              <option value="Arts & Music">Arts & Music</option>
              <option value="Literature and Fiction">
                Literature and Fiction
              </option>
            </select>
          </div>
          <div>
            <label htmlFor="" className="text-ltBlueDeep dark:text-dkBeige">
              Quantity of Books
            </label>
            <input
              required
              type="text"
              name="quantity"
              placeholder="Quantity of book"
              defaultValue={item.quantity}
              className="input input-bordered input-success w-full block text-brandPrimary"
            />
          </div>
          <div>
            <label htmlFor="" className="text-ltBlueDeep dark:text-dkBeige">
              Ratings
            </label>
            <input
              required
              type="text"
              name="rating"
              placeholder="Rating"
              defaultValue={item.rating}
              className="input input-bordered input-success w-full block text-ltBlueDeep"
            />
          </div>
        </div>
        <div className="space-y-4 pt-2">
          <div>
            <label htmlFor="" className="text-ltBlueDeep dark:text-dkBeige">
              Description
            </label>
            <textarea
              required
              name="desc"
              className="textarea textarea-success block w-full text-ltBlueDeep"
              placeholder="Short Description"
              defaultValue={item.description}
            ></textarea>
          </div>
          <button className="btnlt w-full">Submit Book</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBook;
