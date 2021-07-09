import { Link } from "react-router-dom";

function Footer(props) {
   return (
           <div className="footercontainer">
              <Link to="/">
              <div>
                 </div>
              <div className="footernavbarcontainer">
              <img src="/img/ngpadi_logo_black_svg.svg" className="footerlogo" />
              <br />
                 <Link to="/">Home</Link>
                 <Link to="/createpost">Post Something</Link>
                 <Link to="/members">Members</Link>
                 <Link to="/about">About</Link>
                 <Link to="/signup">Sign Up</Link>
                 <Link to="/signin">Sign In</Link>
                 <br />
                 &copy; 2021 NGPadi
              </div>
              </Link>
           </div>
           );
}

export default Footer;