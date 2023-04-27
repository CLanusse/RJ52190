import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import HookTest from './ejemplos/HookTest';
import PokeApi from './ejemplos/PokeApi';
import PokeList from './ejemplos/PokeList';
import ItemList2 from './ejemplos/hoc/ItemList2';
import Nosotros from './ejemplos/hoc/Nosotros';
import ItemList3 from './ejemplos/renderprops/ItemList3';
import Nosotros2 from './ejemplos/renderprops/Nosotros2';

function App() {

  return (
    <div>
      <Navbar />

      <PokeApi />

      <ItemList3 />
      {/* <Nosotros /> */}
      {/* <ItemList2 hola="Hola mundo"/> */}
      {/* <PokeList /> */}
      {/* <HookTest /> */}
      {/* <ItemListContainer /> */}

      
    </div>
  );
}

export default App;
