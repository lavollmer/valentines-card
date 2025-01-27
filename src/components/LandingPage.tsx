import "../App.css";
import "../index.css";
import Footer from "./Footer";
import CardPink from "../assets/combinedcardpink-removebg-preview.png";

const LandingPage = () => {
  return (
    <div className="bg-bubblePink w-screen h-screen flex flex-col justify-between items-center p-10">
      <div className="flex grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="font-rubik text-white text-4xl flex flex-col items-center justify-center">
          <h1>SEND A VALENTINES CARD</h1>
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <img src={CardPink} alt="pink card" className="h-96 w-96" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
