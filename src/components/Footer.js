import { Link } from "react-router-dom";

function Footer(props) {
   return (
           <div className="footercontainer">
              <Link to="/">
              <div><img src="/img/ngpadi_logo_black_svg.svg" className="footerlogo" /></div>
              <div className="footernavbarcontainer">
                 <Link to="/">Home</Link>
                 <Link to="/createpost">Post Something</Link>
                 <Link to="/members">Members</Link>
                 <Link to="/about">About</Link>
                 <Link to="/signup">Sign Up</Link>
                 <Link to="/signin">Sign In</Link>
              </div>
              </Link>
           </div>
           );
}

export default Footer;