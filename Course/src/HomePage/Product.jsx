import pro from "../data/pro.json";

function Product({ setCart }) {
  function addToCart(course) {
    setCart((prevCart) => {
      const updated = [...prevCart, course];
      console.log("Cart now contains:", updated);
      return updated;
    });
  }

  return (
    <div className="flex justify-center w-full py-10">
      <div className="w-full max-w-7xl px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {pro.map((course) => (
            <div
              key={course.id}
              className="flex flex-col justify-between h-[360px] w-full sm:w-[45%] md:w-[22%] bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={course.image}
                alt="Course"
                className="w-full h-[177px] object-cover"
              />
              <div className="flex flex-col justify-between h-full p-4">
                <div>
                  <p className="font-semibold text-base text-gray-900">
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
                </div>
                <div className="flex flex-row justify-between items-center mt-4 px-2 py-2">
                  <p className="text-lg font-semibold text-black">
                    ₹{course.price}
                  </p>
                  <button
                    onClick={() => addToCart(course)}
                    className="bg-[#5624d0] text-white px-4 py-1 rounded hover:bg-[#3e1ca0] active:scale-95 active:bg-[#2d1477] transition duration-150 ease-in-out shadow-md hover:shadow-lg"
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
