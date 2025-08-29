import { Header, Footer } from "./components";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import { useEffect, useState } from "react";
import authService from "./appwrite/auth";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between">
      <div className="w-full block">
        <Header />
        <main>Main Container</main>
        <Footer />
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default App;
