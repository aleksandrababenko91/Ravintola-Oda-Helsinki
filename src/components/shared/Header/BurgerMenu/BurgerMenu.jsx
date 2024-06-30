"use client";

import styles from './BurgerMenu.module.scss'
import { motion } from 'framer-motion';
import { useState } from 'react';
import logo from '../../../../../public/images/logo.png'
import Image from 'next/image';

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
    <div className={`${styles.navbar} ${
      burgerMenuActive ? styles.active : ""
      }`}
    >
        <div className={styles.navigation}>
          <div className={styles.logoName}>
          <a href="/">
              <Image  alt="logo" src={logo} fillsizes="100%" className={styles.logo}/>
          </a>
          </div>
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
                <a href="/">Portfolio</a>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <a href="/">For founders</a>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <a href="/">For Investors</a>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <a href="/">Logo</a>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <a href="/">Reading</a>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <a href="/">About</a>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <a href="/">Contact us</a>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <a href="/">LinkedIn</a>
              </motion.li>
            </motion.ul>
        </div>
    </div>
  )
}