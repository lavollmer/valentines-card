import "../App.css";
import "../index.css";
import Footer from "./Footer";
import Navigation from "./Navigation";
import CardPink from "../assets/combinedcardpink-removebg-preview.png";

const LandingPage = () => {
  return (
    <div className="bg-redred w-screen h-screen flex flex-col justify-between items-center p-10">
      <div>
        <Navigation />
      </div>
      <div className="flex grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="font-rubik text-white flex flex-col items-center justify-center">
          <h1 className="text-4xl bg-gradient-to-r from-blue-600 to-blue-800 inline-block font-bold text-transparent bg-clip-text">
            Send a beautiful Valentine's Digital Card
          </h1>
          <p className="text-md text-center">
            Looking for the perfect way to show your love this Valentine's Day?
            Send a personalized digital card that speaks from the heart! Our
            collection of beautiful, customizable e-cards lets you express your
            feelings in a unique and memorable way. Whether it’s for your
            partner, friend, or anyone special, our cards are designed to make
            your message unforgettable. Quick, easy, and delivered instantly –
            send a little love today!
          </p>
          <button className="py-2 px-4 rounded-lg bg-navyBlue bg-opacity-80 border-4 border-double">
            Send a Valentine's Card
          </button>
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
