import { useTranslations } from "next-intl";
import MainLink from "../../MainLink/MainLink";
import { navigationLinks } from "./constants";
import styles from "./Menu.module.scss";
import {createKey} from '../../../shared/KeyFunction/KeyFunction';


const Menu = () => {
  const t = useTranslations("Header");

  return (
    <ul className={styles.menu}>
      {navigationLinks.map(({ url, name}) => (
        <li key={createKey()}>
          <MainLink url={url}>
            {t(name)}
          </MainLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;