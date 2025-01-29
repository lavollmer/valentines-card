import HeartPost from "../assets/heartpostlogo.png";
import ButtonVal from "./ButtonVal";

const Navigation = () => {
  return (
    <div className="fixed top-0 w-full">
      <nav className="flex flex-row justify-between w-full bg-salmon_pink">
        <img src={HeartPost} alt="heart post" className="h-24 w-24" />
        <div className="flex items-center justify-center">
          <ButtonVal buttonTitle="Preview Cards" />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
