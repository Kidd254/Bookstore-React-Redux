/* eslint-disable import/no-extraneous-dependencies */
import { BsFillPersonFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navigation.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <h1 className={styles.h1}>Bookstore CMS</h1>
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
      </div>
      <div className={styles.rigth}>
        <div className={styles.iconBtn}>
          <BsFillPersonFill
            color="#0290ff"
            size={22}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
