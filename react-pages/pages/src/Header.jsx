import GlobalNav from './GlobalNav';
import"./Header.css";

function Header ({ onNav }) {
    return (
        <header className='header'>
            <img
            src="http://placekitten.com/100/100?image=1"
            className='header__logo'
            alt='website logo'
            />
            <h1 className='header__tittle'>
                Welcome to my website
                </h1>
            <GlobalNav onNav={ onNav } className="header__nav"/>
        </header>
    );
}

export default Header;