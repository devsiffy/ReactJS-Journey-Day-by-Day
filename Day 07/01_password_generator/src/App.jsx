import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const selectPassword = useRef(null);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let domain = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) domain += "0123456789";
    if (charAllowed) domain += "!#$%^&*<>,?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * domain.length + 1);
      pass += domain.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyGeneratedPassword = useCallback(() => {
    selectPassword.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full h-screen bg-[#222] flex items-center justify-center">
        <div>
          <h2 className="text-white text-4xl font-semibold">
            Password Generator
          </h2>

          <div className="mt-8">
            <input
              className="w-[20rem] py-2 px-3 rounded-xl text-xl outline-none"
              type="text"
              value={password}
              ref={selectPassword}
              readOnly
            />
            <button
              className="text-white bg-blue-500 py-2 px-3 rounded-xl text-xl ms-2"
              onClick={copyGeneratedPassword}
            >
              Copy
            </button>
          </div>

          <div className="text-white mt-6">
            <div className="flex flex-col gap-4">
              <label htmlFor="length" className="text-[1.2rem]">
                Length ({length})
              </label>
              <input
                type="range"
                id="length"
                min={6}
                max={24}
                className="w-[14rem] h-2 bg-gray-200 rounded-lg cursor-pointer accent-blue-600"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2 my-6">
              <input
                type="checkbox"
                id="number"
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="number" className="text-[1.2rem]">
                Number
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="character"
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor="character" className="text-[1.2rem]">
                Character
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
