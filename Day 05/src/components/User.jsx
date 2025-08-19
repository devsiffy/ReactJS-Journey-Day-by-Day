const User = ({
  name = "Ali",
  email = "abc@gmail.com",
  isLoggedIn = false,
}) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>IsLoggedIn: {isLoggedIn ? "Yes" : "No"}</p>
    </div>
  );
};

export default User;
