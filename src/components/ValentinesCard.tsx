import { motion } from "framer-motion";

interface Props {
  firstName: string;
  message: string;
  fromName: string;
}

const ValentinesCard: React.FC<Props> = ({ firstName, message, fromName }) => {
  return (
    <>
      <div className="bg-mauvePink h-screen flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -400 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-10 bg-cherryRed rounded-lg"
        >
          <div className="flex flex-col items-center justify-center space-y-4 h-full font-rubik text-white">
            <div className="text-xl">
              <h1>Happy Valentine's Day {firstName}!</h1>
            </div>
            <div className="font-bold">{message}</div>
            <div className="font-bold"> Love, {fromName}</div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ValentinesCard;
