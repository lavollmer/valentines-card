import HeartPost from "../assets/heartpostlogo.png";
import ButtonVal from "./ButtonVal";
import WhiteLogo from "../assets/logoWhite.png"

const Navigation = () => {
  return (
    <div className="fixed top-0 w-full">
      <nav className="flex flex-row justify-between w-full bg-gradient-to-r from-red-300 to-pink-600 pl-10 pr-10 p-10">
        {/* <img src={WhiteLogo} alt="heart post" className="" /> */}
        <h1 className="text-4xl text-white font-rubik font-bold"> HeartPost</h1>
        <div className="flex flex-row space-x-4 items-center justify-center">
          <ButtonVal buttonTitle="FAQs" />
          <ButtonVal buttonTitle="Preview Cards" />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
