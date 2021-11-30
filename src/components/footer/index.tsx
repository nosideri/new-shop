import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p>Copyright 2021 Madi's Shop</p>
      <ul>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/tou">TOU</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
