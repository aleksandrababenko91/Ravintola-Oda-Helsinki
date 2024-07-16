"use client";
import Link from "next/link";
import styles from "./MainLink.module.scss";

const MainLink = ({
  url,
  children,
  className,
  onClick 
}) => {
  return (
    <Link 
      href={url} 
      className={`${styles.link} ${className}`}
      onClick={onClick} 
    >
      {children}
    </Link>
  );
};

export default MainLink;
