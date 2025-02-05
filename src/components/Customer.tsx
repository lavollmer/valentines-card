import { FaStar } from "react-icons/fa6";

const Customer = () => {
  return (
    <div className="flex flex-col space-y-10 font-rubik p-20">
      <div className="flex flex-row items-center">
        <h1 className="mt-8 mb-6 text-2xl lg:text-3xl font-bold text-gray-100">
          What They've Said
        </h1>
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
          <p className="font-semibold text-white">
            What a great way and easy way to send a card to my significant other!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customer;
