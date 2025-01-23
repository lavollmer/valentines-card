import YouAreLoved from "./YouAreLoved";
import Vintage from "./Vintage";
import ValentinesCard from "./ValentinesCard";
import { useLocation } from "react-router-dom";

interface SentCardProps {
  selectedCard: string;
  firstName: string;
  message: string;
  fromName: string;
}

const SentCard: React.FC<SentCardProps> = () => {
  const location = useLocation();
  const { firstName, message, fromName, selectedCard } =
    location.state as SentCardProps;

  const returnHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-mauvePink justify-center items-center font-rubik">
      <div>
        {selectedCard === "YouAreLoved" && (
          <YouAreLoved
            firstName={firstName}
            message={message}
            fromName={fromName}
          />
        )}
        {selectedCard === "Vintage" && (
          <Vintage
            firstName={firstName}
            message={message}
            fromName={fromName}
          />
        )}
        {selectedCard === "ValentinesCard" && (
          <ValentinesCard
            firstName={firstName}
            message={message}
            fromName={fromName}
          />
        )}
      </div>
      <h1>Your Card Has Been Sent!</h1>
      <div>
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

export default SentCard;
