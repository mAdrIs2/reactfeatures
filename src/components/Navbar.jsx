import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">{props.text[0]}</Link>
        </li>
        <li>
          <Link to="/about">{props.text[1]}</Link>
        </li>
        <li>
          <Link to="/api">{props.text[2]}</Link>
        </li>
        <li>
          <Link to="/grid">{props.text[3]}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
