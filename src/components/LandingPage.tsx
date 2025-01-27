import "../App.css";
import "../index.css";
import Footer from "./Footer";
import PinkBlob from "../assets/pinkBlob-removebg-preview.png";
import Letter from "../assets/letter-removebg-preview.png";

const LandingPage = () => {
  return (
    <div className="bg-bubblePink w-screen h-screen flex flex-col justify-between items-center">
      <div className="flex grid grid-cols-2 gap-4">
        <div className="font-rubik flex flex-col items-center justify-center">
          <h1>Send a Greeting Card</h1>
          <h1>Sign In</h1>
        </div>
        <div>
          <img src={PinkBlob} alt="pink blob" className="h-96 w-96 z-10" />
          <img src={Letter} alt="letter" className="h-96 w-96 z-20" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
