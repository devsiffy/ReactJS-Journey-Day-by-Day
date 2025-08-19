import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    // can't increment counter value to 3 times as we expect
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // Now counter is incremented to 3 times
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div className="text-white text-3xl m-4 mb-6">
        Counter Value: {counter}
      </div>

      <button
        onClick={addValue}
        className="bg-blue-600 text-white py-1 px-3 rounded m-2"
      >
        Add Value
      </button>

      <button
        onClick={removeValue}
        className="bg-blue-600 text-white py-1 px-3 rounded m-2"
      >
        Remove Value
      </button>
    </>
  );
};

export default Counter;
