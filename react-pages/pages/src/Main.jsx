import {useState } from 'react';
import Home from './Home';
import About from './About';
import Cats from './Cats';



function Main ({ page, onNav}) {
      
    return (
        <main>
           
            { (page === '/') && <Home onNav={onNav}/> }
            { (page === '/About.html') && <About/>}
            { (page === '/Cats.html') && <Cats/> }
      
        </main>
    );
}

export default Main;