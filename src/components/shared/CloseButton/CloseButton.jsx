import { Icon } from "../Icon/Icon";
import styles from './CloseButton.module.scss'
import clsx from "clsx";
import close from '../../../../public/images/close.svg';
import Image from "next/image";

export default function CloseBtn({ ariaLabel, onClick, className }) {
  return <button 
    aria-label={ariaLabel} 
    onClick={onClick} 
    className={clsx(styles.btn, className)}>
      <Image src={close} alt="close button" width={8} height={8}/>
  </button>
}