import { Link } from "react-router-dom";
import "./navbar.css";
import home from "../pages/img/home.svg";
import about from "../pages/img/about-dot-me.svg";
import contact from "../pages/img/contact.svg";
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="1home blok">
        <img src={home} alt="" className="img" />
      </Link>
      <Link to="/about" className="about blok">
        <img src={about} alt="" className="img" />
      </Link>
      <Link to="/contact" className="contact blok">
        <img src={contact} alt="" className="img" />
      </Link>
      {/* <Link to="/users/1 \" className="user">
        👤 User
      </Link> */}
    </nav>
  );
}

export default Navbar;
