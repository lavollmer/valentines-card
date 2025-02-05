import YouAreLoved from "./YouAreLoved";
import Vintage from "./Vintage";
import ValentinesCard from "./ValentinesCard";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import ButtonVal from "../components/ButtonVal";
import Footer from "./Footer";

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

  console.log(selectedCard);

  return (
    <>
      <div>
        <Navigation />
      </div>
      <div className="flex flex-col h-screen w-screen bg-mauvePink justify-center items-center font-rubik space-y-10 bg-gradient-to-r from-red-300 to-pink-600">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white font-rubik">Your Card Has Been Sent!</h1>
          <div onClick={returnHome} className="p-4">
            <ButtonVal buttonTitle="Sent Another Card" />
          </div>
        </div>
        <div>
          {selectedCard === "YouAreLoved" && (
            <YouAreLoved
              firstName={firstName}
              message={message}
              fromName={fromName}
            />
          )}
          {selectedCard === "Vintage" && (
            <div className="transform  rounded-xl h-100 w-100 sm:h-64 sm:w-64 shadow-xl transition duration-300 hover:scale-120">
              <div className="flex h-full justify-center items-center">
                <Vintage
                  firstName={firstName}
                  message={message}
                  fromName={fromName}
                />
              </div>
            </div>
          )}
          {selectedCard === "Valentines" && (
            <ValentinesCard
              firstName={firstName}
              message={message}
              fromName={fromName}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SentCard;
