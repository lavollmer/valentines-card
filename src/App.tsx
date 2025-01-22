import "./App.css";
import "./index.css";
import "./components/ValentinesCard";
import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState();
  const [name, setName] = useState();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Message: ${message} | Name: ${name}`);
  };

  return (
    <>
      <div className="bg-mauvePink h-screen flex flex-col justify-center items-center font-rubik">
        <div>
          <h1 className="font-bold text-xl p-10">Send a Valentine's Card</h1>
        </div>
        <div className="w-80 h-80 bg-fairytalePink rounded-lg">
          <form
            className="flex flex-col items-center justify-center space-y-8 h-full w-full"
            onSubmit={handleSubmit}
          >
            <div>
              <h1>What is their name?</h1>
              <input
                value={name}
                placeholder="Please enter your name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <h1>What is your message?</h1>
              <input
                value={message}
                placeholder="Please enter a message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button className="px-8 py-2 bg-eggplant rounded-lg" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
