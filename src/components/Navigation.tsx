import HeartPost from "../assets/heartpostlogo.png";
import ButtonVal from "./ButtonVal";

const Navigation = () => {
  return (
    <div className="fixed top-0 w-full">
      <nav className="flex flex-row justify-between w-full bg-gradient-to-r from-red-300 to-pink-600 pl-10 pr-10 p-2">
        <img src={HeartPost} alt="heart post" className="h-24 w-24" />
        <div className="flex items-center justify-center">
          <ButtonVal buttonTitle="Preview Cards" />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
