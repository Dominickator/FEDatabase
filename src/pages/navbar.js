import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './navbar.module.css'

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <>
      <nav className={styles.nav}>
        <a className={styles.siteTitle}>Fire Emblem Weapons</a>
        <ul>
          <li>
            <button onClick={() => navigate('/weapons')}>Weapons</button>
          </li>
          <li>
            <button onClick={() => navigate('/modify')}>Modify</button>
          </li>
          <li>
            <button onClick={() => navigate('/search')}>Search</button>
          </li>
          <li>
            <button onClick={() => navigate('/')}>Logout</button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;