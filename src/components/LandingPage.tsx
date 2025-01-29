import "../App.css";
import "../index.css";
import Footer from "./Footer";
import HeartPost from "../assets/heartpostlogo.png";
import BackgroundCard from "../assets/backgroundCard.jpg";
import BoxText from "./BoxText";
import ButtonVal from "./ButtonVal";

const LandingPage = () => {
  return (
    <div className="bg-salmon_pink w-screen h-screen">
      <div className="flex flex-row justify-between space-y-4 p-10">
        <img src={HeartPost} alt="heart post" className="h-24 w-24" />
        <ButtonVal buttonTitle="Preview Cards" />
      </div>
      <div className="flex flex-col">
        <div className="relative bg-salmon_pink flex flex-col items-stretch">
          <img src={BackgroundCard} alt="photo" className="rounded-lg" />
        </div>
      </div>
      <div>
        <div className="font-rubik p-10 text-black flex flex-col items-center justify-center space-y-6">
          <h1 className="text-4xl bg-gradient-to-r from-white to-pink-200 inline-block font-bold text-transparent bg-clip-text">
            It's never been easier to send a Valentine's Day card
          </h1>
          <p className="text-md text-left">
            Looking for the perfect way to show your love this Valentine's Day?
            Send a personalized digital card that speaks from the heart!
          </p>
          <ButtonVal buttonTitle="Create Your Card" />
        </div>
      </div>
      <div className="bg-salmon_pink flex flex-col items-center justify-center space-y-4 p-10">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-2xl text-pale_dogwood font-bold">
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
