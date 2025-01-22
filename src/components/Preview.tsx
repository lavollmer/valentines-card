import YouAreLoved from "./YouAreLoved";
import Vintage from "./Vintage";
import ValentinesCard from "./ValentinesCard";

const Preview = () => {
  return (
    <div className="bg-mauvePink h-screen flex justify-center items-center">
      <YouAreLoved firstName="firstName" message="message" />
      <Vintage />
      <ValentinesCard />
    </div>
  );
};

export default Preview;
