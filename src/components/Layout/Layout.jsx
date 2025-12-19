import Navbar from "./../Navbar/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "./../Footer/Footer";
import { useEffect } from "react";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
