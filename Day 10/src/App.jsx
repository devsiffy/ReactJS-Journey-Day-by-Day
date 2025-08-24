import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-6 text-white">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">
        React & Redux Todo App
      </h1>
      <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-700">
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
};

export default App;
