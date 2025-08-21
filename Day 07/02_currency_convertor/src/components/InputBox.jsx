import { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) => {
  const inputId = useId();

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white rounded-lg shadow-md my-2">
      {/* Input Field */}
      <div className="flex flex-col w-full sm:w-auto">
        <label htmlFor={inputId} className="text-gray-600 font-medium mb-2">
          {label}
        </label>
        <input
          type="number"
          id={inputId}
          placeholder="Enter amount"
          className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full sm:w-80 text-lg px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* Select Dropdown */}
      <div className="flex flex-col w-full">
        <label htmlFor="currency" className="text-gray-600 font-medium mb-2">
          Currency
        </label>
        <select
          id="currency"
          name="currency"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 cursor-pointer"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
