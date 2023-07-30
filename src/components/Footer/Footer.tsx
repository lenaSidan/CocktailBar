import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer(): JSX.Element {
  return (
    <nav className={styles.container}>
      <NavLink to="aboutUs" className={styles.link}>AboutUs</NavLink>
    </nav>
  );
}
