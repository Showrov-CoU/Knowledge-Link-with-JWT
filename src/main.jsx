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
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import Books from "./Components/Books/Books.jsx";
import BookDetails from "./Components/BookDetails/BookDetails.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import UpdateBook from "./Pages/UpdateBook/UpdateBook.jsx";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Read from "./Components/Read/Read.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/category/:name",
        element: (
          <PrivateRoute>
            <Books></Books>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://knowledge-link-server.vercel.app/category/${params.name}`
          ),
      },
      {
        path: "/bookdetails/:id",
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://knowledge-link-server.vercel.app/bookdetails/${params.id}`
          ),
      },
      {
        path: "/read/:id",
        element: (
          <PrivateRoute>
            <Read></Read>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://knowledge-link-server.vercel.app/bookdetails/${params.id}`
          ),
      },
      {
        path: "/AddBooks",
        element: (
          <PrivateRoute>
            <AddBooks></AddBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/AllBooks",
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
        // loader: () => fetch("https://knowledge-link-server.vercel.app/books"),
      },
      {
        path: "/BorrowedBooks",
        element: (
          <PrivateRoute>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateBook></UpdateBook>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://knowledge-link-server.vercel.app/bookdetails/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
