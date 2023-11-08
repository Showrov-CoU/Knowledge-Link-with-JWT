import { useContext, useEffect, useState } from "react";
import BookCard from "./BookCard";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/borrowBooks/${user.email}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user.email]);
  // console.log(items);

  const handleReturn = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#05386B",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, return it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/borrowBooks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if (result.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your booked has been returned.",
                "success"
              );
              const reamining = items.filter((item) => item._id !== id);
              setItems(reamining);
            }
          });

        // Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div className="px-10 py-10 bg-ltBgSecondary dark:bg-dkBgSecondary">
      <h1 className="text-2xl text-ltBlueDeep dark:text-dkBeige font-bold pb-3">
        Your Borrowed Books:{" "}
      </h1>
      <div className="grid grid-cols-2 gap-10">
        {items.map((item) => (
          <BookCard
            key={item._id}
            item={item}
            handleReturn={handleReturn}
          ></BookCard>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
