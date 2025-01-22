import "./App.css";
import "./index.css";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <div className="bg-mauvePink h-screen flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -400 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-80 h-80 bg-fairytalePink rounded-lg"
        >
          <div className="flex flex-col items-center justify-center h-full">
            <h1>Happy Valentine's Day!</h1>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default App;
