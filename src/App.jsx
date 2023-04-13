import "./App.css";
import { Clicker } from "./components/Clicker";
import Equipo from "./components/Equipo";

function App() {

  return (
    <div className="App">
      <h2>Hola Mundo</h2>
      <hr/>

      {/* <TarjetaPersonal nombre="Martin FIordelisi" edad="25" curso="Python"/>
      <TarjetaPersonal nombre="Conrado Lanusse" edad="34" curso="ReactJS"/> */}
      {/* <Equipo /> */}
      
      <Clicker />
  
    </div>
  );
}

export default App;
