import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import PokeApi from './ejemplos/PokeApi';
import Nosotros from './ejemplos/hoc/Nosotros';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Contacto from './components/Contacto/Contacto';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
          <Route path='/productos/:categoryId' element={ <ItemListContainer />} />
          <Route path='/detail/:itemId' element={ <ItemDetailContainer /> }/>
          <Route path='/nosotros' element={ <Nosotros />}/>
          <Route path='/pokemon' element={ <PokeApi />} />
          <Route path='/cart' element={ <Cart/> }/>
          <Route path='/contacto' element={ <Contacto/> }/>
          <Route path='*' element={ <Navigate to={"/"} /> }/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
