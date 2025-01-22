import { motion } from "framer-motion";

interface Props {
  firstName: string;
  message: string;
  fromName: string;
}

const ValentinesCard:React.FC<Props> = ({ firstName, message,fromName }) => {
  return (
    <>
      <div className="bg-mauvePink h-screen flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -400 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-80 h-80 bg-fairytalePink rounded-lg"
        >
          <div className="flex flex-col items-center justify-center h-full">
            <h1>Happy Valentine's Day {firstName}!</h1>
          </div>
          <div>
            {message}
          </div>
          <div>
            From {fromName}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default ValentinesCard;