import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Equipo from "./Equipo.jsx"

function App() {
  const profe = "Rodrigo Maestre";

  const calculo = (n) => {
    return 2 + 2 * n - 30;
  };

  const estilos = {
    marginLeft: "40px",
    backgroundColor: "green",
    color: "white",
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1
        style={estilos}
      >
        El profesor es: {profe}{" "}
      </h1>
      <h4>Bienvenidos a React JS con Vite</h4>
      <div className="card">
        <p>{calculo(125)}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Equipo />
      <Equipo />
    </div>
  );
}

export default App;
