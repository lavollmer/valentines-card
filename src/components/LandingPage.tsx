import "../App.css";
import "../index.css";
import Footer from "./Footer";
import BackgroundCard from "../assets/backgroundCard.jpg";
import BoxText from "./BoxText";
import ButtonVal from "./ButtonVal";
import Navigation from "./Navigation";

const LandingPage = () => {
  return (
    <div className="bg-salmon_pink w-screen h-screen">
      <Navigation />
      <header className="my-24">
        <div
          className="w-full bg-center bg-cover"
          style={{ backgroundImage: `url(${BackgroundCard})` }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
            <div className="text-center">
              <div className="container px-4 mx-auto">
                <div className="max-w-4xl text-center justify-center">
                  <h1 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                    It's never been easier to send a Valentine's Day card
                  </h1>
                  <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                    Looking for the perfect way to show your love this
                    Valentine's Day? Send a personalized digital card that
                    speaks from the heart!
                  </p>
                  <div className="flex justify-center">
                    <ButtonVal buttonTitle="Send A Card" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

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
