import "../index.css";
import { LuMessageSquareHeart } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-center text-white">
      <LuMessageSquareHeart />
      <p className="font-rubik text-sm">
        Created by Laura Dev 2025. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
