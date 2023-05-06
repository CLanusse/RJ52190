import './Navbar.scss'
import logo from '../../assets/react.svg'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import Buscador from '../../ejemplos/Buscador'

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                {/* <img src={'./public/react.svg'} alt='LOGO'/> */}
                <img src={logo} alt='LOGO'/>

                <nav className="navbar">
                    <Link to='/' className="navbar__link">Inicio</Link>
                    <Link to='/productos/verduleria' className="navbar__link">Verduleria</Link>
                    <Link to='/productos/panaderia' className="navbar__link">Panaderia</Link>
                    <Link to='/productos/carniceria' className="navbar__link">Carniceria</Link>
                    <Link to='/productos/perfumeria' className="navbar__link">Perfumeria</Link>
                    <Link to='/productos/limpieza' className="navbar__link">Limpieza</Link>
                    <Link to='/asdfasf' className="navbar__link">Roto</Link>
                </nav>
                <CartWidget />
            </div>

            <Buscador />
        </header>
    )
}