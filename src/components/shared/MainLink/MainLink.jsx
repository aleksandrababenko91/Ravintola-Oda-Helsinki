"use client";

import Link from "next/link";
import styles from "./MainLink.module.scss";

const MainLink = ({
  url,
  children,
  className
}) => {
  return (
    <Link href={url} 
    className={`${styles.link} ${className}`}>
      {children}
    </Link>
  );
};

export default MainLink;