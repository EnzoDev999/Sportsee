// src/App.js
import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import User from "./pages/User.jsx";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import NotFound from "./pages/notFound";
import "./sass/App.scss";

function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Sidebar />
        <Outlet />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/user/:id",
          element: <User />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
