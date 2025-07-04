import { motion } from 'framer-motion';

function RoleDice({ roleDice, currentDice }) {
  return (
    <div className="flex flex-col items-center mt-12">
      <motion.div
        className="cursor-pointer"
        onClick={roleDice}
        whileTap={{ rotate: 360, transition: { duration: 0.5 } }}
      >
        <img
          src={`/images/dice_${currentDice}.jpg`}
          alt={`Dice showing ${currentDice}`}
          className="w-32 md:w-48 lg:w-56 object-contain"
        />
      </motion.div>
      <p className="text-xl md:text-2xl font-semibold text-gray-700 mt-4">
        Click on Dice to roll
      </p>
    </div>
  );
}

export default RoleDice;