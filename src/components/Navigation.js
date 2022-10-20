import NavItems from "./NavItems";
import "../styles/index.css";

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <h1 className="nav-logo">
        <i className="fa-face-awesome"></i>
      </h1>
      <div className="menu-icon"></div>
      <ul className="navbar-ul">
        {NavItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
