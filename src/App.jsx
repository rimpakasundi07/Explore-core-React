import "./App.css";

function App() {
  return (
    <>
      <h1> React Core Concepts</h1>
      <Person></Person>
      <Sports></Sports>
      <Student></Student>
      <Developer name="rajon" tech="js"></Developer>
      <Developer name="Majumdar" tech="python"></Developer>
      <Developer name="Shabana"></Developer>
    </>
  );
}
function Student() {
  return (
    <div className="student">
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  );
}

const personStyle = {
  color: "red",
  textAlign: "left",
};

function Developer(props) {
  console.log(props);
  return (
    <div
      style={{
        border: "2px solid green",
        borderRadius: "20px",
      }}
    >
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  );
}

function Person() {
  const age = 19;
  const name = "Rimpa";
  return (
    <p id="" title="tooltip" style={personStyle}>
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
