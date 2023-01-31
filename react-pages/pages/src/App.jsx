import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
    const [page, setPage ]= useState('Home');

    function onNav( event) {
        event.preventDefault();
        const target = event.target.getAttribute('href');
        setPage(target);
    }
    return (
        <div className='app'>
            <Header onNav={onNav}/>
            <Main page={page} onNav={onNav}/>
            <Footer/>
        </div>
    );
}

export default App;
