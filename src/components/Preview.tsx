import YouAreLoved from "./YouAreLoved";
import Vintage from "./Vintage";
import ValentinesCard from "./ValentinesCard";
import { useLocation } from "react-router-dom";

interface Props {
  firstName: string;
  message: string;
  fromName: string;
}

const Preview: React.FC<Props> = () => {
  const location = useLocation();
  const { firstName, message, fromName } = location.state as Props;
  
  const returnHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="bg-mauvePink h-screen w-screen flex flex-col justify-center items-center">
      <div className="flex flex-row items-center justify-center h-full">
        <div>
        <YouAreLoved
          firstName={firstName}
          message={message}
          fromName={fromName}
        />
        <Vintage firstName={firstName} message={message} fromName={fromName} />
        <ValentinesCard
          firstName={firstName}
          message={message}
          fromName={fromName}
        />
        </div>
        <button
          type="button"
          onClick={returnHome}
          className="px-8 py-2 bg-greenCadet text-white rounded-lg font-rubik"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default Preview;
