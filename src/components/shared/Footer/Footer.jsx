import SocialLinks from './SocialLinks/SocialLinks';
import ContactLinks from './ContactLinks/ContactLinks';
import styles from './Footer.module.scss'
import { v4 as uuidv4 } from 'uuid';
import {contacts} from './items';
import {socials} from './items';
import Menu from './Menu/Menu';
import Logo from '../Logo/Logo';

export default function Footer () {
  return(
    <footer  className={styles.footer}>
      <div className={styles.logoFooter}>
        <Logo />
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
            Opening hours:
            <li>Mon-Thu: 16:00-22:00</li>
            <li> Fri: 16:00-23:00</li>
            <li> Sat: 14:00-23:00</li>
            <li>Sun: 14:00-21:00</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}