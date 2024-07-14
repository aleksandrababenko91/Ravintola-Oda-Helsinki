"use client";

import Link from 'next/link';
import styles from './Logo.module.scss';
import Image from 'next/image';
import logo from '../../../../../public/images/logo.svg';
import clsx from "clsx";


export default function Logo({ className}) {

  return (
    <Link
      href="/"
      className={clsx(styles.logo, className)}
    >
      <Image  src={logo} alt="logo" fill sizes = "100%" relative/>
    </Link>
  );
}