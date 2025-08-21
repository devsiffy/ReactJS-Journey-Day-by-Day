import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyData from "./hooks/useCurrencyData";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyData(from);
  const currencyOptions = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      {/* Background Image */}
      <img
        src="https://cdn.pixabay.com/photo/2024/02/15/14/00/man-8575459_1280.jpg"
        alt="bg image"
        className="fixed inset-0 w-full h-full object-cover z-[-1]"
      />

      {/* Centered Card with fit-content width */}
      <div className="min-h-screen flex items-center justify-center px-2">
        <form
          className="w-full sm:w-fit bg-white/20 backdrop-blur-md rounded-xl p-4 sm:p-4 shadow-lg"
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <h1 className="text-center text-2xl font-bold text-white mb-6">
            Currency Converter
          </h1>

          <div className="space-y-2 relative">
            <InputBox
              label={"From"}
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
              currencyOptions={currencyOptions}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
            />

            {/* Swap Button */}
            <div className="flex justify-center my-2">
              <button
                type="button"
                className="bg-white text-blue-600 border border-blue-500 hover:bg-blue-100 rounded-full p-2 w-10 h-10 flex items-center justify-center shadow transition duration-200"
                aria-label="Swap currencies"
                onClick={swap}
              >
                ⇅
              </button>
            </div>

            <InputBox
              label={"To"}
              amount={convertedAmount}
              currencyOptions={currencyOptions}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
