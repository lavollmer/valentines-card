import heartRed from "../assets/heart_red.png";
import Sparkles from "../assets/sparkles.png";

interface Props {
  firstName: string;
  message: string;
  fromName: string;
}

const YouAreLoved: React.FC<Props> = ({ firstName, message, fromName }) => {
  return (
    <div className="bg-cherryRed flex flex-row justify-center items-center font-rubik">
      <div className="p-8 bg-eggplant rounded-lg flex flex-row items-center space-x-4">
        <div>
          <img src={heartRed} alt="heart" className="h-16 w-16" />
        </div>
        <div>
          <h1 className="text-white text-2xl">Reminder: You are loved</h1>
          <h1>{firstName}</h1>
          <p className="text-white text-lg">{message}</p>
          <p className="text-white text-lg">From {fromName}</p>
          <img src={Sparkles} alt="sparkles" className="h-16 w-16" />
        </div>
      </div>
    </div>
  );
};

export default YouAreLoved;
