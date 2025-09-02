import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const LogoutBtn = ({ className = "" }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <>
      <button onClick={handleLogout} className={className}>
        Logout
      </button>
    </>
  );
};

export default LogoutBtn;
