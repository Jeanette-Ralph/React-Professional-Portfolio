import NavItems from "./NavItems";
import "../styles/index.css";
import Scrollspy from "react-scrollspy";

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <div className="menu-icon"></div>
      <ul className="navbar-ul">
        {NavItems.map((item, index) => {
          return (
            <Scrollspy
              items={["about", "portfolio", "skills", "contact"]}
              currentClassName="active"
            >
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  <button className="button-87 ">{item.title}</button>
                </a>
              </li>
            </Scrollspy>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
