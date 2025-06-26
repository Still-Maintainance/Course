import Navbar from "../HomePage/Navbar";
import { useEffect } from "react";

function OrderPage({ cart }) {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <title>Checkout</title>

      <Navbar />

      <div className="flex gap-10 justify-center">
        <div className="flex flex-col items-start w-full max-w-3xl py-10 gap-6 ">
          {cartItems.length === 0 ? (
            <p className="text-xl font-semibold text-gray-700">
              Your cart is empty.
            </p>
          ) : (
            <>
              {cartItems.map((course) => (
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
              ))}
            </>
          )}
        </div>

        <div className="flex flex-col justify-start w-full max-w-xl border rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 mt-10 p-8 h-fit">
          <h1 className="text-black font-semibold text-xl text-center mb-12">
            Order Summary
          </h1>

          {/* Header Row */}
          <div className="flex justify-between font-semibold text-black text-lg mb-2">
            <p className="w-1/2">Course</p>
            <p className="w-1/4 text-center">Qty</p>
            <p className="w-1/4 text-right">Total</p>
          </div>

          {/* Course Items */}
          {cartItems.map((course) => (
            <div
              key={course.id}
              className="flex justify-between py-3 text-black"
            >
              <p className="w-1/2">{course.name}</p>
              <p className="w-1/4 text-center">{course.quantity}</p>
              <p className="w-1/4 text-right">
                ₹{(course.price * course.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          {/* Total Amount */}
          <div className="mt-6 pt-4 flex justify-between text-lg font-bold text-black border-t">
            <p>Total</p>
            <p>
              ₹
              {cartItems
                .reduce(
                  (sum, course) =>
                    sum + course.quantity * parseFloat(course.price),
                  0
                )
                .toFixed(2)}
            </p>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}

export default OrderPage;
