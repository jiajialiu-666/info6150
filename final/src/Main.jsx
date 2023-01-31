
import Home from './Home';
import About from './About';
import Events from './Events';
import Customers from './Customers';
import Register from './Register';



function Main ({ page, onNav}) {
      
    return (
        <main>
           
            { (page === '/') && <Home onNav={onNav}/> }
            { (page === '/About.html') && <About/>}
            { (page === '/Events.html') && <Events/> }
            { (page === '/Customers.html') && <Customers/>}
            { (page === '/Register.html') && <Register/>}
      
        </main>
    );
}

export default Main;