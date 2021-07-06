import { Link } from "react-router-dom";

function Header(props) {
   return (
           <nav className="nav">
              <Link to="/">
              <div><img src="/img/logo_svg.svg" className="mainlogo"/></div>
              <ul>
                 <li>Home</li>
           
              </ul>
           
           
              </Link>
           </nav>
           );
}

export default Header;