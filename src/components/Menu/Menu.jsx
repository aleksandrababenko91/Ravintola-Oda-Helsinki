import React from 'react';
import MenuCard from './MenuCard/MenuCard';
import GetMenuCardsInfo from './MenuCard/MenuCard';
import { useTranslations } from 'next-intl';



export default function  MenuPage () {
  const t = useTranslations('Menu');
  const menuCards = GetMenuCardsInfo();
  return(
    <section className={styles.section}>
      <div className={styles.menu}>
        <p className={styles.menu}>{Menu}</p>
        <ul className={styles.cardsContainer}>
          {menuCards.map((el, index) => {
            return (
              <li
                key={index}
                className={styles.card}
              >
                <MenuCard card={el} index={index} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  )
};
