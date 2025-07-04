import { useState } from 'react';
import { motion } from 'framer-motion';
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-7xl"
      >
        {isGameStarted ? (
          <GamePlay toggle={toggleGamePlay} />
        ) : (
          <StartGame toggle={toggleGamePlay} />
        )}
      </motion.div>
    </div>
  );
}

export default App;