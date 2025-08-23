import { UserContextProvider } from "./context/UserContextProvider";
import User from "./components/User";
import Profile from "./components/Profile";

const App = () => {
  return (
    <UserContextProvider>
      <div className="w-full h-screen flex flex-col justify-center gap-12 items-center bg-black/90 text-white">
        <h1 className="text-4xl font-bold">Mini Context (Project)</h1>
        <User />
        <Profile />
      </div>
    </UserContextProvider>
  );
};

export default App;
