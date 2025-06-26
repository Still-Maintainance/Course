import Navbar from "../HomePage/Navbar";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import HomePageFooter from "../HomePage/HomePageFooter";
import { useState } from "react";

function CartPage({ cart, setCart }) {
  const groupedCart = cart.reduce((acc, course) => {
    const id = course.id;
    if (!acc[id]) {
      acc[id] = { ...course, quantity: 1 };
    } else {
      acc[id].quantity += 1;
    }
    return acc;
  }, {});

  const cartItems = Object.values(groupedCart);

  function clearCart() {
    setCart([]);
  }

  const [button,setButton] = useState(true);

  function dis()
    {
      setButton(false);
    }
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <title>Cart</title>
      <Navbar />

     {button && (
       <div className="flex p-5 items-center justify-center">
        <div className="flex p-5 items-center rounded shadow-md  justify-center bg-purple-700 w-full max-w-sm hover:shadow-2xl duration-300 ">
          <p className="font-semibold text-white text-2xl">Your Courses </p>
        </div>
      </div>

     )}



      <div className="flex flex-col items-center w-full px-6 py-10 gap-6">
        {cartItems.length === 0 ? (
          <p className="text-xl font-semibold text-gray-700">
            Your cart is empty.
          </p>
        ) : (
          cartItems.map((course) => (
            <div
              key={course.id}
              className="flex flex-row border items-center gap-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 p-4 w-full max-w-4xl"
            >
              <img
                src={course.image}
                alt={course.name}
                className="w-[200px] h-[150px] object-cover rounded-md"
              />

              <div className="flex flex-col justify-between h-full flex-1">
                <div>
                  <p className="font-semibold text-xl text-gray-900">
                    {course.name}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {course.instructor}
                  </p>
                  <div className="flex items-center text-sm text-gray-700 mt-2">
                    <span className="font-semibold text-yellow-500 pe-1">
                      {course.rating}
                    </span>
                    <span className="text-gray-600">from</span>
                    <span className="ps-1">({course.reviews})</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Quantity: {course.quantity}
                  </p>
                </div>

                <div className="flex flex-row justify-between items-center mt-4">
                  <p className="text-lg font-semibold text-black">
                    ₹{course.quantity * parseFloat(course.price)}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}

        <div className="flex  justify-center items-center gap-5">
          <Link to="/order">
            <button className="bg-[#5624d0] text-white px-5 py-2 rounded hover:bg-[#3e1ca0] transition duration-200">
              Proceed to Buy
            </button>
          </Link>

          <button
            onClick={() =>{
              clearCart();
              dis();
            }}
            className="bg-[#5624d0] text-white px-5 py-2 rounded hover:bg-[#3e1ca0] transition duration-200"
          >
            Clear Cart
          </button>
        </div>
      </div>
      <HomePageFooter />
    </>
  );
}

export default CartPage;
