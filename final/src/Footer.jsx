import"./Footer.css";



function Footer ({ onNav }) {
    return (
        <footer className="footer">
           
            <ul className="footer__liat footer__policy">
                <li><a href="/Events.html" className="b" onClick={onNav}>Events</a> </li>
                
            </ul>
            <ul className="footer__liat footer__cats">
                <li><a href="/Customers.html" className="c" onClick={onNav}>Customer Service</a> </li>
               
            </ul>
          






        </footer>
    );
}

export default Footer;