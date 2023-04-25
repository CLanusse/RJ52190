import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import PokeList from './ejemplos/PokeList';

function App() {

  return (
    <div>
      <Navbar />
      <PokeList />
      {/* <ItemListContainer /> */}

      
    </div>
  );
}

export default App;
