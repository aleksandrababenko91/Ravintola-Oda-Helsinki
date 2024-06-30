"use client"

import BurgerMenu from './BurgerMenu/BurgerMenu';
import styles from "./Header.module.scss";
import ReservationButton from '../ReservationButton/ReservationButton';



export default function Header ()  {
  return (
    <header className={styles.header}>
      <div  className={styles.container}>
        <ReservationButton/>
      </div>
      <div className={styles.burger}>
        <BurgerMenu />
      </div>
    </header>
  );
}