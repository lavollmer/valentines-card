import heartRed from "../assets/heart_red.png";
import Sparkles from "../assets/sparkles.png";

interface Props {
  firstName: string;
  message: string;
}

const YouAreLoved: React.FC<Props> = ({ firstName, message }) => {
  return (
    <div className="bg-cherryRed h-screen flex justify-center items-center font-rubik">
      <div>
        <img src={heartRed} alt="heart" className="h-16 w-16" />
      </div>
      <div>
        <h1 className="text-white text-2xl">
          Reminder: You are loved {firstName}
        </h1>
        <p className="text-white text-lg">{message}</p>
        <img src={Sparkles} alt="sparkles" className="h-16 w-16" />
      </div>
    </div>
  );
};

export default YouAreLoved;
