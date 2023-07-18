import { NavLink } from 'react-router-dom';
import styles from '../Styles/Navigation.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.h1}>Bookstore</h1>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink
            to="/"
            className={({ isActive }) => {
              const active = isActive ? styles.active : styles.navLink;
              return active;
            }}
          >
            Books
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink
            to="categories"
            className={({ isActive }) => {
              const active = isActive ? styles.active : styles.navLink;
              return active;
            }}
          >
            Categories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
