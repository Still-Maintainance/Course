import Navbar from "./HomePage/Navbar";
import Product from "./HomePage/Product";
import HomePageFooter from "./HomePage/HomePageFooter";

function Explore() {
  return (
    <>
      <Navbar />

      <div className="flex p-10 items-center justify-center">
        <div className="flex p-8 items-center rounded shadow-md  justify-center bg-purple-700 w-full max-w-xl hover:shadow-2xl duration-300 ">
          <p className="font-semibold text-white text-2xl">
            Explore our New and Exciting Courses
          </p>
        </div>
      </div>
      <Product />
      <HomePageFooter/>
    </>
  );
}

export default Explore;
