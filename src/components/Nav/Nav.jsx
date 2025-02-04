import "./Nav.css";
const Nav = () => {
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <h2>
            <a href="#">react app</a>
          </h2>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">services</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Nav;
