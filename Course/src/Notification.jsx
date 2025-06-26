import Navbar from "./HomePage/Navbar";
import HomePageFooter from "./HomePage/HomePageFooter";

function Notifications() {
  return (
    <>
      <Navbar />

      <div className="flex p-[250px] items-center justify-center ">
        <p className="font-semibold text-xl">No Notifications</p>
      </div>
      <HomePageFooter />
    </>
  );
}

export default Notifications;
