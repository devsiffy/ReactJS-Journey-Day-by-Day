function App() {
  const usingJS = "Evaluated Expression";

  return (
    <>
      <h1>Understanding How React Create And Render Element</h1>
      <p>
        {
          /*
            we use JS inside JSX syntax as in the form of "evaluated expression".
            We don't use if-else statements or similar that needs to evaluate first, we directly use evaluated expression here.
            Why? because at the end we know babel convert JSX component use React.createElement() to render easily by React.render().
            So, using if-else or for-loops statements in JSX is similar like passing these statements as a parameter of function, which is absolutely wrong..! (same for React.createElement())
          */
          usingJS
        }
      </p>
    </>
  );
}

export default App;
