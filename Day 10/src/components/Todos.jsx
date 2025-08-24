import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-lg font-semibold mb-3">Todos</h1>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-700 px-4 py-2 rounded-lg shadow-sm border border-gray-600"
          >
            <span>{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red-400 hover:text-red-500 font-bold transition"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
