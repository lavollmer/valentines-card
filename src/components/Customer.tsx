import { FaStar } from "react-icons/fa6";
import Ian from "../assets/isa.jpg";

const Customer = () => {
  return (
    <div className="flex flex-col space-y-10 font-rubik p-20">
      <div className="flex flex-row items-center justify-center">
        <h1 className="mt-8 mb-6 text-2xl lg:text-3xl font-bold text-gray-100">
          What They've Said
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center">
        <img
          src={Ian}
          alt="customer review"
          className="rounded-full border-2 border-bg-black h-10 w-10"
        />
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col space-y-10">
          <div className="flex flex-row items-center justify-center space-x-2">
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="yellow" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-semibold text-white">
              What a great way and easy way to send a card to my significant
              other!
            </p>
            <p className="text-white font-semibold flex flex-row items-center">
              - Alisha
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
