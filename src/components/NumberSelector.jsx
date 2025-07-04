import { motion } from 'framer-motion';

function NumberSelector({ setError, error, selectedNumber, setSelectedNumber }) {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError('');
  };

  return (
    <div className="flex flex-col items-end">
      {/* Error Message */}
      <p className="text-red-500 text-lg font-medium mb-2 min-h-[1.5rem]">{error}</p>
      {/* Number Selection Grid */}
      <div className="flex gap-4 flex-wrap justify-end">
        {arrNumber.map((value, i) => (
          <motion.div
            key={i}
            className={`w-16 h-16 md:w-20 md:h-20 border-2 border-gray-800 flex items-center justify-center text-xl md:text-2xl font-bold cursor-pointer rounded-md transition-colors duration-200 ${
              value === selectedNumber
                ? 'bg-blue-600 text-white'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
            onClick={() => numberSelectorHandler(value)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Select number ${value}`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                numberSelectorHandler(value);
              }
            }}
          >
            {value}
          </motion.div>
        ))}
      </div>
      {/* Label */}
      <p className="text-xl md:text-2xl font-semibold mt-2 text-gray-700">Select Number</p>
    </div>
  );
}

export default NumberSelector;