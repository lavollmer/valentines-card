//importing CSS files and images into React component
import { useState } from "react";
import iconStar from "./assets/icon-star.svg";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function FAQs() {
  //initializes a state variable named "active" and a function to update it as "setActive" using the useState hook, intial value is set to false
  const [active, setActive] = useState(false);

  //array of data to be displayed in the FAQ section that contains objects
  const data = [
    {
      intro: "What is HeartPost?",
      pg: "HeartPost is a FREE digital card service to send personalized, unique cards to family, friends, significant others and more.",
      id: 1,
    },
    {
      intro: "Is HeartPost Free?",
      pg: "Yes, HeartPost offers free digital cards.",
      id: 2,
    },
    {
      intro: " Can I reuse HeartPost cards?",
      pg: "Yes, you can.",
      id: 3,
    },
    {
      intro: "When will HeartPost digital cards be delivered?",
      pg: "Instantly via email or text.",
      id: 4,
    },
  ];

  //returns the JSX structure of the component
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-light-pink font-worksans">
        <div className="w-[400px] md:max-w-[600px] md:w-auto z-10 rounded-lg flex flex-col p-3 text-dark-purple bg-white">
          <div className="flex items-center my-4">
            {/* <img
              src={iconStar}
              alt="avatar"
              className="rounded-full h-20 w-20"
            /> */}
            <h1 className="font-bold text-dark-purple text-3xl md:text-4xl">
              FAQS
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            {/* iterates over each item in the data array - for each item the function returns JSX */}
            {data.map((item) => (
              // key prop is required for each child in a list
              <div key={item.id}>
                <div className="flex justify-between p-2 hover:text-purple-600 items-center">
                  <h1 className="text-lg font-bold w-[75%] md:w-[90%] leading-6 tracking-wide mb-2 cursor-pointer">
                    {item.intro}
                  </h1>
                  {/* image to serve as button to toggle active state */}
                  <img
                    src={active === item.id ? <FaMinus /> : <FaPlus />}
                    alt="icon"
                    className="w-6 h-6 cursor-pointer"
                    // onClick event handler to toggle active state
                    onClick={() =>
                      active === item.id ? setActive(0) : setActive(item.id)
                    }
                  />
                </div>
                {/* conditional rendering block that checks if the current item is the active one */}
                {active === item.id ? (
                  <p className="text-gray-500 dark:text-gray-400">{item.pg}</p>
                ) : (
                  <p></p>
                )}
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQs;
