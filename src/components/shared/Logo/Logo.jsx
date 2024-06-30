"use client";

import Image from "next/image";
import { Link } from '../../../navigation';
import styles from './Logo.module.scss';
import logo from '../../../../public/images/logo.svg';

export default function Logo() {

  return (
    <Link
      href={'./'}
      className={styles.logo}
    >
      <Image width={450} height={250} alt="logo png"  src={logo}/>
    </Link>
  );
}