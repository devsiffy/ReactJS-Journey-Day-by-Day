import React, { createElement, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h2>Custom App !</h2>
    </div>
  );
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);

const usingJS = "Evaluted Expression";

// this react function actually create an object that react actually render
const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Visit Google",
  // last paramenters are JS (evaluated expressions) that we use in JSX, that's why in JSX we can't use if-else or for-loop statements bcz they need to be evaluated first which is not a right thing for function parameters
  usingJS
);

createRoot(document.getElementById("root")).render(
  <App />

  // <MyApp />
  // MyApp()

  // ReactElement // not works, bcz react doesn't expect structure of object that we define
  // anotherElement // this works, and verify the above statement (react render an object that it already defined for rendering)

  // reactElement
);
