import { Header, Footer } from "./components";
import { Outlet, useNavigation } from "react-router-dom";

const Layout = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <div className="w-full h-screen text-center p-2 bg-black/90 text-white">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
