import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <>
      <div className="nav-bar-cont">
        <ul className="nav-bar">
          <li>
            <Link to="/">
              <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png"></img>
            </Link>
          </li>

          <li className="n-link">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link className="n-link" to="/jobs">
              Jobs
            </Link>
          </li>

          <li>
            <button className="btn btn-primary">Logout</button>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Header;