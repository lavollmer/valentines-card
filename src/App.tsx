import "./App.css";
import "./index.css";
import "./components/ValentinesCard";
import { motion } from "framer-motion";
import ValentinesCard from "./components/ValentinesCard";

function App() {
  return (
    <>
      <div className="bg-mauvePink h-screen flex justify-center items-center">
        <ValentinesCard />
      </div>
    </>
  );
}

export default App;
