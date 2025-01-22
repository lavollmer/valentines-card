import heartRed from "../assets/heart_red.png";
import Sparkles from "../assets/sparkles.png";

const YouAreLoved = () => {
  return (
    <div className="bg-cherryRed h-screen flex justify-center items-center">
      <div>
        <img src={heartRed} alt="heart" className="h-16 w-16" />
      </div>
      <div>
        <h1 className="text-white text-2xl">You are loved</h1>
        <Sparkles />
      </div>
    </div>
  );
};

export default YouAreLoved;
