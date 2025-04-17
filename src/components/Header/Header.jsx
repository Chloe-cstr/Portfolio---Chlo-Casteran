import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './header.scss'

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Logo Kasa" className="header__logo" />
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "header__nav__item__maj active" : "header__nav__item__maj"
            }
          >
            Accueil
          </NavLink>
          </li>
          <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "header__nav__item__maj active" : "header__nav__item__maj"
            }
          >
            A propos
          </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;