"use client"

import SocialLinks from './SocialLinks/SocialLinks';
import ContactLinks from './ContactLinks/ContactLinks';
import styles from './Footer.module.scss'
import { v4 as uuidv4 } from 'uuid';
import {contacts} from './items';
import {socials} from './items';
import Menu from './Menu/Menu';
import Logo from './Logo/Logo';
import { useTranslations } from "next-intl";
import UseAlert from '../UseAlert/UseAlert';

export default function Footer () {
  const t = useTranslations("Footer.schedule");
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return(
    <footer className={styles.footer}>
      <div className={styles.logoFooter}>
        <Logo onClick={scrollToTop} className={styles.logo}/>
      </div>
        <Menu />
      <div className={styles.contacts}>
        <div className={styles.adressTel}>
          {contacts.map((item) => {
            return <ContactLinks key={uuidv4()}  item={item}/>
          })}
        </div>
        <div className={styles.social}>
          {socials.map((item) => {
            return <SocialLinks key={uuidv4()}  item={item}/>
          })}
        </div>
      </div>
      <div className={styles.schedule}>
        <div className={styles.icon}>
          <ul className={styles.schedule}>
            {t("opening")}
            <li>{t("Mon")}</li>
            <li> {t("Fri")}</li>
            <li> {t("Sat")}</li>
            <li>{t("Sun")}</li>
          </ul>
        </div>
      </div>
      <UseAlert />
    </footer>
  )
}