export function Button({ children, ...props }) {
  return (
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
      {...props}
    >
      {children}
    </button>
  );
}

export function OutlineButton({ children, ...props }) {
  return (
    <button
      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 rounded-lg transition duration-200"
      {...props}
    >
      {children}
    </button>
  );
}