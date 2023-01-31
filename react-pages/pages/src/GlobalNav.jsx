import menu from './menu';
import './GlobalNav.css';
import { useState } from 'react';
import './css-gg.css';

function GlobalNav({ className, onNav }) {
    const [showMenu, setShowMenu] = useState(false);
    const list = menu.map(item => {
        return (
            <li className="nav__item" key={item.name}>
                <a 
                    className="global-nav__link" 
                    href={item.path}
                        onClick={ onNav}>
                        {item.name}
                </a >
            </li>
        );
    });
    
    const showClass = showMenu ? 'global-nav__list--open' : "";

    return (
        
        <nav className={`global-nav ${className}`}> 
            <button className='global-nav__button'
            onClick={ ()=>{
                setShowMenu(!showMenu);
            } }><i className="gg-menu"/></button>
            <ul className={`global-nav__list ${showClass}`}>
                {list}
            </ul>          
        </nav>
    
    );
}


export default GlobalNav;