import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
      <h1 className="title">Madi's Shop</h1>
      <p className="desc">An Ecommerce website for all of Madi's items</p>
      <ul>
        <li className="button">
          <Link to="/">Home</Link>
        </li>
        <li className="button">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
