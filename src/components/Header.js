import { Link } from "react-router-dom";

function Header(props) {
   return (
           <nav className="nav">
              <Link to="/">
              <div><img src="/img/logo_svg.svg" className="mainlogo" /></div>
              <div className="navbarcontainer">
                 <Link to="/">Home</Link>
                 <Link to="/members">Members</Link>
                 <Link to="/about">About</Link>
                 <Link to="/signup">Sign Up</Link>
                 <Link to="/signin">Sign In</Link>
              </div>
              </Link>
           </nav>
           );
}

export default Header;