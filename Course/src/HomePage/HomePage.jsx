import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Product from "./Product";
import HomePageFooter from "./HomePageFooter";

function HomePage({ cart, setCart }) {
  return (
    <>
      <title>Online Courses - Learn Anything , On Your Schedule | Udemy.com</title>
      <Navbar cart={cart} />
      <Carousel />
      <Product cart={cart} setCart={setCart} />
      <HomePageFooter />
    </>
  );
}

export default HomePage;
