import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const User = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleFormData = (e) => {
    e.preventDefault();
    setUser({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <form onSubmit={handleFormData}>
        <div className="flex flex-col gap-2 mb-8">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="w-[24rem] rounded-full text-black outline-none text-lg py-1 px-4"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            className="w-[24rem] rounded-full text-black outline-none text-lg py-1 px-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="mt-6 bg-blue-500 py-2 px-4 rounded-full"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default User;
