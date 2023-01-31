import GlobalNav from './GlobalNav';
import"./Header.css";
import logo from "./logo.jpg";
import ThemeSwitcher from './ThemeSwitcher';



function Header ({ onNav, theme, toggleTheme }) {
    return (
        
        <header className='header'>
            <img
            src={logo}
            className='header__logo'
            alt='website logo'
            />
            <h1 className='header__tittle'>
                Welcome to Buyers' Shop
                </h1>
                <ThemeSwitcher className="header_theme-switcher" theme={theme} toggleTheme={toggleTheme}/>
            <GlobalNav onNav={ onNav } className="header__nav"/>
        </header>
    );
}

export default Header;