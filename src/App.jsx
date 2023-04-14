import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import { Button } from 'react-bootstrap';

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer saludo={"Hola mundo!"}/>

      {/* <button className="btn btn-primary">Click me</button> */}
      <Button variant="success">Click me 2</Button>
      <Button variant="outline-danger" className='mx-3'>Click me 3</Button>
    </div>
  );
}

export default App;
