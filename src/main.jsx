import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import Main from "./Layout/Main.jsx";
import Home from "./Pages/Home/Home.jsx";
import AddBooks from "./Pages/AddBooks/AddBooks.jsx";
import AllBooks from "./Pages/AllBooks/AllBooks.jsx";
import BorrowedBooks from "./Pages/BorrowedBooks/BorrowedBooks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/AddBooks",
        element: <AddBooks></AddBooks>,
      },
      {
        path: "/AllBooks",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/BorrowedBooks",
        element: <BorrowedBooks></BorrowedBooks>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
