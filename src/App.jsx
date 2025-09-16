import "./App.css";

function App() {
  return (
    <>
      <h1> React Core Concepts</h1>
      {/* <Person></Person>
      <Sports></Sports>
      <Student></Student>
      <Developer name="rajon" tech="js"></Developer>
      <Developer name="Majumdar" tech="python"></Developer>
      <Developer name="Shabana"></Developer>
      <Player name="Rini" runs="5000"></Player>
      <Player name="Mini" runs="5000"></Player>
      <Dakshina event="chada for durgapuja" amount="2500"></Dakshina>
      <Dakshina event="chada for kalipuja"></Dakshina> */}
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

function Dakshina({ event, amount = 0 }) {
  return (
    <div className="student">
      <p>Dakshina For:{event} </p>
      <p>Amount: {amount} </p>
    </div>
  );
}

const { name, runs } = { name: "Rini", runs: "5000" };

function Player({ name, runs }) {
  return (
    <div className="student">
      <h3>Name: {props.name} </h3>
      <p>Runs: {props.runs}</p>
    </div>
  );
}
// const { name, tech } = {
//   name: "Majumdar",
//   tech: "js",
// };

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
