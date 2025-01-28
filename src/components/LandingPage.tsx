import "../App.css";
import "../index.css";
import Footer from "./Footer";
import HeartPost from "../assets/heartpostlogo.png";
import CardPink from "../assets/combinedcardpink-removebg-preview.png";
import BackgroundCard from "../assets/backgroundCard.jpg"
import BoxText from "./BoxText";
import { FaArrowDown } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="bg-bubblePink w-screen h-screen">
      <div className="flex flex-start items-start space-y-4 p-10">
        <img src={HeartPost} alt="heart post" className="h-16 w-16" />
      </div>
      <div className="bg-bubblePink p-10 flex grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="font-rubik p-10 text-white flex flex-col items-center justify-center space-y-6">
          <h1 className="text-4xl bg-gradient-to-r from-navyBlue to-blue-800 inline-block font-bold text-transparent bg-clip-text">
            It's never been easier to send a Valentine's Day card
          </h1>
          <p className="text-md text-left">
            Looking for the perfect way to show your love this Valentine's Day?
            Send a personalized digital card that speaks from the heart! Our
            collection of beautiful, customizable e-cards lets you express your
            feelings in a unique and memorable way. Whether it’s for your
            partner, friend, or anyone special, our cards are designed to make
            your message unforgettable. Quick, easy, and delivered instantly –
            send a little love today!
          </p>
          <button className="flex flex-row items-center justify-center space-x-2 py-2 px-4 rounded-lg bg-navyBlue border-4 border-double hover:bg-white hover:bg-opacity-40 hover:text-black">
            <FaArrowDown />
            <p>Send a Valentine's Card</p>
          </button>
        </div>
        <div className="relative bg-bubblePink flex flex-col items-center justify-center">
          <img src={BackgroundCard} alt="photo" className="rounded-lg"/>
        </div>
      </div>
      <div className="bg-bubblePink flex flex-col items-center justify-center space-y-4 p-10">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-2xl text-navyBlue font-bold">
            Why Choose Our Valentine's Digital Cards?
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <BoxText
              Title="Personalized Designs"
              Description="Choose from a wide range of stunning, customizable templates."
            />
          </div>
          <div>
            <BoxText
              Title="Instant Delivery"
              Description="No waiting for shipping – send your love in seconds!"
            />
          </div>
          <div>
            <BoxText
              Title="Eco-Friendly & Convenient"
              Description="No paper, no waste – just heartfelt messages, instantly delivered."
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
