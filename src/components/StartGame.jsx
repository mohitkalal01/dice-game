import { motion } from 'framer-motion';

function StartGame({ toggle }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/images/dice.png"
          alt="Dice"
          className="w-40 md:w-80 lg:w-[600px] object-contain"
        />
      </motion.div>
      <motion.div
        className="text-center md:text-left"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-800 whitespace-nowrap">
          Dice Game
        </h1>
        <button
          onClick={toggle}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 w-full md:w-auto text-lg"
          aria-label="Start the dice game"
        >
          Play Now
        </button>
      </motion.div>
    </div>
  );
}

export default StartGame;