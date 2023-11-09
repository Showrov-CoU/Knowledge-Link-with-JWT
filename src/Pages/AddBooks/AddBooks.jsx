// import Swal from "sweetalert2";

import Swal from "sweetalert2";

const AddBooks = () => {
  const handleAddBooks = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.photo.value;
    const name = form.name.value;
    const author = form.author.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const description = form.desc.value;

    const newBook = {
      image,
      name,
      author,
      category,
      quantity,
      rating,
      description,
    };
    // console.log(newBook);
    fetch("https://knowledge-link-server.vercel.app/addbooks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Book added successfully...!",
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
      <form onSubmit={handleAddBooks} className="px-[5%] md:px-32 lg:px-52  ">
        <div className="grid grid-cols-2 gap-2">
          <input
            required
            type="text"
            name="photo"
            placeholder="Image URL"
            className="input input-bordered input-success w-full block text-ltBlueDeep"
          />
          <input
            required
            type="text"
            placeholder="Book Name"
            name="name"
            className="input input-bordered input-success w-full block text-ltBlueDeep"
          />
          <input
            required
            type="text"
            placeholder="Author Name"
            name="author"
            className="input input-bordered input-success w-full block text-ltBlueDeep"
          />
          <select
            required
            name="category"
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
          <input
            required
            type="text"
            name="quantity"
            placeholder="Quantity of book"
            className="input input-bordered input-success w-full block text-brandPrimary"
          />
          <input
            required
            type="text"
            name="rating"
            placeholder="Rating"
            className="input input-bordered input-success w-full block text-ltBlueDeep"
          />
        </div>
        <div className="space-y-2 pt-2">
          <textarea
            required
            name="desc"
            className="textarea textarea-success block w-full text-ltBlueDeep"
            placeholder="Short Description"
          ></textarea>
          <button className="btnlt w-full">Add Books</button>
        </div>
      </form>
    </div>
  );
};

export default AddBooks;
