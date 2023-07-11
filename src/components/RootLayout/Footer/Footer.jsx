import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div>
          <ul className="first-list">
            <li className="list-item">
              <h1 className="footer-brand ">KitaabGanj</h1>
            </li>
            <li className="list-item">
              "Fill your house with stacks of books, in all the crannies and all
              the nooks."
            </li>
            <li className="list-item">Privacy Policy</li>
            <li className="list-item">Terms of use</li>
            <li className="list-item">
              <h5 className="footer-brand">© 2023 KitaabGanj</h5>
            </li>
          </ul>
        </div>
        <div>
          <ul className="second-list">
            <li className="list-item">Let's connect</li>
            <li className="list-item ">
              <NavLink
                to="https://github.com/procrastinatedbread"
                target={"_blank"}
                className="list-item-link"
              >
                Github
              </NavLink>
            </li>
            <li className="list-item ">
              <NavLink
                to="https://www.linkedin.com/in/nikhil-chhabra-805064228/"
                target={"_blank"}
                className="list-item-link"
              >
                LinkedIn
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink
                to="https://twitter.com/NikhilChhabraaa"
                target={"_blank"}
                className="list-item-link"
              >
                Twitter
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul className="third-list">
            <li className="list-item"> Resources </li>
            <li className="list-item">
              <NavLink className="list-item-link">Sign up</NavLink>{" "}
            </li>
            <li className="list-item">
              <NavLink className="list-item-link">Sign in</NavLink>{" "}
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
export default Footer;
