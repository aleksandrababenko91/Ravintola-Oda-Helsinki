"use client";
import { useTranslations } from "next-intl";
import MainLink from "../../MainLink/MainLink";
import { navigationLinks } from "./constants";
import styles from "./Menu.module.scss";
import stateUseAlert from '../../UseAlert/stateUseAlert';
import { createKey } from "../../KeyFunction/KeyFunction";

const Menu = () => {
  const open = stateUseAlert(state => state.open);
  const t = useTranslations("Header");

  const handleClick = (url, e) => {
    if (url === "/menu" || url === "/contacts") {
      e.preventDefault(); 
      open("info");
      console.log("Alert: use client");
    }
  };

  return (
    <ul className={styles.menu}>
      {navigationLinks.map(({ url, name }) => (
        <li key={createKey()}>
          <MainLink 
            url={url}
            onClick={(e) => handleClick(url, e)}
          >
            {t(name)}
          </MainLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
