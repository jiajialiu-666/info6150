
import { useState } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SkipLink from './SkipLink';

function App() {
    const [page, setPage ]= useState('/');
    const [theme, setTheme] =useState('light');

    function onNav( event) {
        event.preventDefault();
        const target = event.target.getAttribute('href');
        setPage(target);
    }
    function toggleTheme() {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }


    return (
        <div className={`app ${theme}`} >
            <SkipLink/>
            <Header onNav={onNav} theme={theme} toggleTheme={toggleTheme}/>
            <Main page={page} onNav={onNav}/>
            <Footer onNav={onNav}/>
        </div>
    );
}

export default App;
