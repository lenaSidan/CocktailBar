import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function NavBar(): JSX.Element {
  return (
    <nav className={styles.container}>
      <NavLink to="cocktail" className={styles.link}>Cocktail</NavLink>
      <NavLink to="/" className={styles.link}>Home</NavLink>
    </nav>
  );
}
