import ButtonVal from "./ButtonVal";

import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const handleFAQClick = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/FAQs");
  };

  const handlePreviewClick = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/previewcards");
  };

  const handleHomeClick = (e:React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div className="fixed top-0 w-full">
      <nav className="flex flex-row justify-between w-full bg-gradient-to-r from-red-300 to-pink-600 pl-10 pr-10 p-4 border">
        <h1 onClick={handleHomeClick} className="text-4xl text-white font-rubik font-bold cursor-pointer">HeartPost</h1>
        <div className="flex flex-row space-x-4 items-center justify-center">
          <div onClick={handleFAQClick}>
            <ButtonVal buttonTitle="FAQs" />
          </div>
          <div onClick={handlePreviewClick}>
            <ButtonVal buttonTitle="Preview Cards" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
