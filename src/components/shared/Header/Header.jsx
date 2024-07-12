import { useTranslations } from "next-intl";

import Menu from './Menu/Menu';
import styles from "./Header.module.scss";
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Logo from '../Logo/Logo';

const Header = () => {
  const t = useTranslations("Header");
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Menu />
        <div className={styles.actions}>
        </div>
      </div>
      <BurgerMenu />
    </header>
  );
};

export default Header;