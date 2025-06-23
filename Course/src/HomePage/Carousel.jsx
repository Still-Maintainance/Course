import Slider from "react-slick";
import data from "../data/images.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-48 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-gray-700 hover:text-black"
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-48 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-gray-700 hover:text-black"
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
}

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full  px-4 py-20">
      <Slider {...settings}>
        {data.map((item) => (
          <div
            key={item.id}
            className="w-full flex justify-center items-center"
            style={{ backgroundColor: item.bgColor }}
          >
            <div className="relative w-full max-w-7xl mx-auto rounded-xl overflow-hidden shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[400px] object-cover"
              />

              <div className="absolute inset-0 flex flex-col justify-center px-10 py-12">
                <h1
                  className={`text-3xl md:text-4xl font-bold text-${item.textColor} mb-2`}
                >
                  {item.title}
                </h1>
                <p
                  className={`text-md md:text-lg text-${item.textColor} max-w-md`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="flex justify-center pt-12">
        <div className="flex items-center gap-6 bg-black text-white px-8 py-6 rounded-lg shadow-lg max-w-7xl w-full">
          <p className="flex-1 text-sm md:text-base leading-relaxed">
            Training 2 or more people?&nbsp;
            <span className="font-semibold">
              Get your team access to Udemy's top 30,000+ courses.
            </span>
          </p>

          <div className="flex gap-3 flex-shrink-0">
            <button className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-200 transition">
              Get Udemy Business
            </button>
            <button className=" text-white border border-white font-semibold px-4 py-2 rounded ">
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
