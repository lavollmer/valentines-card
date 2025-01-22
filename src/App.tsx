import "./App.css";
import "./index.css";
import "./components/ValentinesCard";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
import YouAreLoved from "./components/YouAreLoved";
import ValentinesCard from "./components/ValentinesCard";
import Vintage from "./components/Vintage";
import Preview from "./components/Preview";


function App() {
  const [message, setMessage] = useState();
  const [firstName, setFirstName] = useState();
  // const [email, setEmail] = useState();
  const [card, setCard] = useState();
  const [selectedCard, setSelectedCard] = useState();
  const [showCard, setShowCard] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Message: ${message} | Name: ${firstName}`);
    setMessage(message);
    setFirstName(firstName);
    // setEmail(email);
    setCard(card);
    setSelectedCard(card);
  };

  const handleCard = () => {
    setCard(selectedCard);
    setShowCard(true);
  };

  const handlePreview = (e: React.FormEvent) => {
    window.location.reload();
    setShowPreview(true);
    e.preventDefault();
  };

  return (
    <>
      <div className="bg-mauvePink h-screen w-screen flex flex-col justify-center items-center font-rubik">
        <div className="flex flex-col p-8">
          <h1 className="font-bold text-lg md:text-xl">
            Send a Valentine's Day Card
            <CiHeart className="inline-block text-2xl text-fairytalePink" />
          </h1>
          <p className="flex flex-row items-center justify-center font-xs">
            for free
          </p>
          <div className="flex flex-col items-center justify-center pt-6">
            <button
              className="flex flex-row items-center justify-center text-md px-6 py-2 bg-eggplant rounded-lg text-white hover:bg-greenCadet"
              type="submit"
              onClick={handlePreview}
            >
              <p>Card Selection Options</p>
            </button>
          </div>
        </div>
        <div className="md:w-1/3 md:h-2/3 bg-fairytalePink rounded-lg item-stretch p-6">
          <form
            className="flex flex-col items-center justify-center space-y-4 h-full w-full"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col justify-start space-y-2">
              <h1>What is their first name?</h1>
              <input
                value={firstName}
                placeholder=" Please enter your name"
                onChange={(e) => setFirstName(e.target.value)}
                className="h-10 border border-eggplant rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-start space-y-2">
              <h1>What is your message?</h1>
              <input
                value={message}
                placeholder=" Please enter a message"
                className="h-10 border border-eggplant rounded-lg"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            {/* <div className="flex flex-col justify-start space-y-2">
              <h1> What is their email?</h1>
              <input
                value={email}
                placeholder="Please enter your email"
                className="h-10 border border-eggplant rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div> */}
            <div>
              <h1>Choose a card:</h1>
              <select className="h-10 border border-eggplant rounded-lg">
                <option value="Valentines">Happy Valentine's Day</option>
                <option value="YouAreLoved">Reminder: You Are Loved</option>
                <option value="Vintage">
                  Vintage Happy Valentine's Day
                </option>
              </select>
            </div>
            <button
              className="flex flex-row items-center justify-center space-x-2 px-8 py-2 bg-eggplant rounded-lg text-white hover:bg-greenCadet"
              type="submit"
              onClick={() => handleCard()}
            >
              <p>Send</p>
              <IoMdMail className="text-xl" />
            </button>
          </form>
        </div>
        <div>{showPreview && <Preview />}</div>
        <div>
          {showCard && selectedCard === "YouAreLoved" && (
            <YouAreLoved firstName="firstName" message="message" />
          )}
          {showCard && selectedCard === "Vintage" && (
            <Vintage firstName="firstName" message="message" />
          )}
          {showCard && selectedCard === "ValentinesCard" && (
            <ValentinesCard firstName="firstName" message="message" />
          )}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
