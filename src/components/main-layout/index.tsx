import Navbar from "../navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";

const MainLayut = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayut;
