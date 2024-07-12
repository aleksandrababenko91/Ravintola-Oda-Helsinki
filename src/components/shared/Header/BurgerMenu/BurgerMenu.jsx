"use client";

import styles from './BurgerMenu.module.scss'
import { motion } from 'framer-motion';
import { useState } from 'react';
import Logo from '../../Logo/Logo';



export default function Header () {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuActive(!burgerMenuActive);
  };

  const motionVariants = {
    open: {
      opaciity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: "easeOut",
        type: "spring",
      },
    },
    closed: {
      opaciity: 0,
        transition: {
          staggerChildren: 0.1,
          duration: 0,
      },
    },
  };

  const listItemVariants = {
    open: {
      y: 0,
      opaciity: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
    closed: {
      y: 100,
      opaciity: 0,
      transition: {
        duration: 0,
      },
    },
  }
  
  return(
    <div className={`${styles.navbar} ${burgerMenuActive ? styles.active : ""}`}>
        <div className={styles.navigation}>
          <div 
            className={styles.burgerMenuContainer} 
            onClick={() => toggleBurgerMenu()}
            >
            <div className={styles.burgerMenuTrigger}></div>
            <div className={styles.burgerMenu}></div>
          </div>
        </div>
        <div className={styles.content}>
            <motion.ul animate={burgerMenuActive ? 'open' : 'closed'} 
            variants={motionVariants}
            >
              <motion.li variants={listItemVariants}>
                <a href="/" 
                target="_blank"
                rel="noopener noreferrer">
                Reservation ( QUANDO )</a>  
                {/* QUANDO */}
              </motion.li>

              <motion.li variants={listItemVariants}>
                <a href="/">Menu</a>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <a href="/">Contact us</a>
              </motion.li>
            </motion.ul>
        </div>
    </div>
  )
}