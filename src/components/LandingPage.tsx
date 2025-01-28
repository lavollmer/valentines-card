import "../App.css";
import "../index.css";
import Footer from "./Footer";
import HeartPost from "../assets/heartpostlogo.png";
import CardPink from "../assets/combinedcardpink-removebg-preview.png";
import BoxText from "./BoxText";

const LandingPage = () => {
  return (
    <div className="bg-bubblePink w-screen h-screen p-10">
      <div className="flex flex-start items-start space-y-4 pb-10">
        <img src={HeartPost} alt="heart post" className="h-16 w-16" />
      </div>
      <div className="flex grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="font-rubik text-white flex flex-col items-center justify-center space-y-6">
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
          <button className="py-2 px-4 rounded-lg bg-navyBlue border-4 border-double hover:bg-white hover:bg-opacity-40 hover:text-black">
            Send a Valentine's Card
          </button>
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <img src={CardPink} alt="pink card" className="h-96 w-96" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 pt-10">
        <div>
          <h1 className="text-2xl text-white">
            Why Choose Our Valentine's Digital Cards?
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
