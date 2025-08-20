import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div
        className="fixed bottom-12 left-[50%] translate-x-[-50%] px-6 py-4 rounded-full flex items-center gap-4 shadow-md border border-gray-300"
        style={{ backgroundColor: "white" }}
      >
        <button
          onClick={() => setColor("white")}
          className="px-4 py-1 shadow-xl rounded-3xl"
          style={{ backgroundColor: "white" }}
        >
          White
        </button>
        <button
          onClick={() => setColor("black")}
          className="px-4 py-1 shadow-xl rounded-3xl text-white"
          style={{ backgroundColor: "black" }}
        >
          Black
        </button>
        <button
          onClick={() => setColor("lavender")}
          className="px-4 py-1 shadow-xl rounded-3xl"
          style={{ backgroundColor: "lavender" }}
        >
          Lavender
        </button>
        <button
          onClick={() => setColor("purple")}
          className="px-4 py-1 shadow-xl rounded-3xl text-white"
          style={{ backgroundColor: "purple" }}
        >
          Purple
        </button>
        <button
          onClick={() => setColor("pink")}
          className="px-4 py-1 shadow-xl rounded-3xl"
          style={{ backgroundColor: "pink" }}
        >
          Pink
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="px-4 py-1 shadow-xl rounded-3xl"
          style={{ backgroundColor: "yellow" }}
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("gray")}
          className="px-4 py-1 shadow-xl rounded-3xl text-white"
          style={{ backgroundColor: "gray" }}
        >
          Gray
        </button>
        <button
          onClick={() => setColor("olive")}
          className="px-4 py-1 shadow-xl rounded-3xl text-white"
          style={{ backgroundColor: "olive" }}
        >
          Olive
        </button>
        <button
          onClick={() => setColor("blue")}
          className="px-4 py-1 shadow-xl rounded-3xl text-white"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
          onClick={() => setColor("green")}
          className="px-4 py-1 shadow-xl rounded-3xl text-white"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
        <button
          onClick={() => setColor("red")}
          className="px-4 py-1 shadow-xl rounded-3xl text-white"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
      </div>
    </div>
  );
}

export default App;
