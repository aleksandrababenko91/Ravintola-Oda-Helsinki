import React from 'react';
import MenuCard from './MenuCard/MenuCard';
import GetSpecialMenuCardsInfo from './MenuCard/MenuCard';
import GetStartersCardsInfo from './MenuCard/MenuCard';
import GetMainDishesCardsInfo from './MenuCard/MenuCard';
import GetGeorgiaBreadCardsInfo from './MenuCard/MenuCard';
import GetStewDishesCardsInfo from './MenuCard/MenuCard';
import GetSideDishesCardsInfo from './MenuCard/MenuCard';
import GetDessertsCardsInfo from './MenuCard/MenuCard';
import GetSaucesCardsInfo from './MenuCard/MenuCard';
import { useTranslations } from 'next-intl';



export default function  MenuPage () {
  const t = useTranslations('Menu');
  const specialMenu = GetSpecialMenuCardsInfo();
  const starters = GetStartersCardsInfo();
  const mainDishes = GetMainDishesCardsInfo();
  const stewDishes = GetStewDishesCardsInfo();
  const georgianBread = GetGeorgiaBreadCardsInfo();
  const sideDishes = GetSideDishesCardsInfo();
  const desserts = GetDessertsCardsInfo();
  const sauses = GetSaucesCardsInfo();
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
