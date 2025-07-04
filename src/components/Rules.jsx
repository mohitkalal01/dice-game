import { motion } from 'framer-motion';

function Rules() {
  return (
    <motion.div
      className="max-w-3xl mx-auto bg-pink-50 p-6 rounded-lg mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">How to play dice game</h2>
      <div className="mt-4 text-gray-700 text-base md:text-lg">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>After clicking on the dice, if the selected number matches the dice number, you will earn points equal to the dice number.</p>
        <p>If your guess is wrong, 2 points will be deducted.</p>
      </div>
    </motion.div>
  );
}

export default Rules;