import { motion } from 'framer-motion';

function TotalScore({ score }) {
  return (
    <motion.div
      className="text-center"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-6xl md:text-8xl font-bold text-green-600">{score}</h1>
      <p className="text-xl md:text-2xl font-semibold text-gray-700">Total Score</p>
    </motion.div>
  );
}

export default TotalScore;