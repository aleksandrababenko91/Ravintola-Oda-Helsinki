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
      className={className}
    >
      <Image  src={logo} alt="logo" width={250} height={150}/>
      {/* <Icon className={styles.logo} name="logo" /> */}
    </Link>
  );
}