import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './navbar.module.css'

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <>
      <nav className={styles.nav}>
        <h1 className={styles.siteTitle}>Fire Emblem Weapons</h1>
        <ul>
          <li>
            <button onClick={() => navigate('/')}>Weapons</button>
          </li>
          <li>
            <button onClick={() => navigate('/calc')}>Damage Calculator</button>
          </li>
          <li>
            <button onClick={() => navigate('/search')}>Search</button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar; 