import './Navbar.scss'
import logo from '../../assets/react.svg'
import CartWidget from '../CartWidget/CartWidget'

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                {/* <img src={'./public/react.svg'} alt='LOGO'/> */}
                <img src={logo} alt='LOGO'/>

                <nav className="navbar">
                    <a href='#' className="navbar__link">Enlace 1</a>
                    <a href='#' className="navbar__link">Enlace 2</a>
                    <a href='#' className="navbar__link">Enlace 3</a>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}