import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  /*
    This below approach is also fine. But in React Router Dom for more optimization we use its new feature of "loader (to call api, like below at the end 'githubInfoLoader' function) + useLoaderData (to store api response)"
  */
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/devsiffy")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="text-center m-4 bg-black/80 text-white p-4 text-3xl">
      Public Repos: {data.public_repos}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // adding delay only to check the "loading..." on "/github" route
  const response = await fetch("https://api.github.com/users/devsiffy");
  return response.json();
};
