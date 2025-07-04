import { useState } from 'react';
import NumberSelector from './NumberSelector';
import TotalScore from './TotalScore';
import RoleDice from './RoleDice';
import Rules from './Rules';

function GamePlay({ toggle }) {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState('');
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError('You have not selected any number');
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
    setSelectedNumber(undefined);
    setCurrentDice(1);
    setError('');
  };

  return (
    <main className="pt-16 pb-8 w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 md:gap-8">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
        <button
          onClick={resetScore}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          aria-label="Reset game score"
        >
          Reset Score
        </button>
        <button
          onClick={() => setShowRules((prev) => !prev)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          aria-label={showRules ? 'Hide rules' : 'Show rules'}
        >
          {showRules ? 'Hide' : 'Show'} Rules
        </button>
        <button
          onClick={toggle}
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          aria-label="Return to start screen"
        >
          Back to Start
        </button>
      </div>
      {showRules && <Rules />}
    </main>
  );
}

export default GamePlay;