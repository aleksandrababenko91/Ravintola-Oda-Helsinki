"use client";
import {Icon} from '../Icon/Icon';
import Link from 'next/link';
import styles from './Logo.module.scss';
import Image from 'next/image';
import logo from '../../../../public/images/logo.svg'

export default function Logo({ className}) {

  return (
    <Link
      href="/"
      className={styles.logo}
    >
      <Image  src={logo} alt="logo" width={100} height={60}/>
    </Link>
  );
}