import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="w-[24rem]">
        <h1 className="text-xl font-semibold mb-6">Profile</h1>

        {user ? (
          <p>
            Welcome to <i>"@{user.username}"</i>{" "}
          </p>
        ) : (
          <p>User not exist..!</p>
        )}
      </div>
    </>
  );
};

export default Profile;
