import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Sports></Sports>
    </>
  );
}
function Person() {
  const age = 19;
  const name = "Rimpa";
  return (
    <p>
      I am person: {name} {age}
    </p>
  );
}

function Sports() {
  return (
    <div>
      <h3>Cricket</h3>
      <p>Playing & losing</p>
    </div>
  );
}

export default App;
