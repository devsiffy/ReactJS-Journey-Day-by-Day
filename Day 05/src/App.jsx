import Card from "./components/Card";
import Counter from "./components/Counter";
import User from "./components/User";

function App() {
  const user = {
    name: "Devsiffy",
    email: "dev@google.com",
    isLoggedIn: false,
  };

  return (
    <>
      {/* <Card product="Simple Shirt" price="50" /> */}
      {/* <Card product="Printed Shirt" price="120" status="Out of Stock" /> */}

      {/* <User /> */}
      {/* <User info={user} /> */}

      <Counter />
    </>
  );
}

export default App;
