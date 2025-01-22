import "./App.css";
import "./index.css";
import "./components/ValentinesCard";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";

function App() {
  const [message, setMessage] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [card, setCard] = useState();

  const handleSubmit = (e: React.FormEvent) => {
    console.log(`Message: ${message} | Name: ${name}`);
  };

  return (
    <>
      <div className="bg-mauvePink h-screen flex flex-col justify-center items-center font-rubik">
        <div className="p-8">
          <h1 className="font-bold text-lg md:text-xl">
            Send a Valentine's Day Card
            <CiHeart className="inline-block text-2xl text-fairytalePink" />
          </h1>
          <p className="flex flex-row items-center justify-center font-xs">for free</p>
        </div>
        <div className="md:w-1/3 md:h-2/3 bg-fairytalePink rounded-lg item-stretch p-6">
          <form
            className="flex flex-col items-center justify-center space-y-4 h-full w-full"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col justify-start space-y-2">
              <h1>What is their name?</h1>
              <input
                value={name}
                placeholder=" Please enter your name"
                onChange={(e) => setName(e.target.value)}
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
            <div className="flex flex-col justify-start space-y-2">
              <h1> What is their email?</h1>
              <input
                value={email}
                placeholder="Please enter your email"
                className="h-10 border border-eggplant rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <h1>Choose a card:</h1>
              <select className="h-10 border border-eggplant rounded-lg">
                <option value={card}>Happy Valentine's Day</option>
                <option value={card}>Reminder:You Are Loved</option>
                <option value={card}>Vintage Happy Valentine's Day</option>
              </select>
            </div>
            <button
              className="flex flex-row items-center justify-center space-x-2 px-8 py-2 bg-eggplant rounded-lg text-white hover:bg-greenCadet"
              type="submit"
            >
              <p>Send</p>
              <IoMdMail className="text-xl" />
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
