"use client";
import { useTranslations } from "next-intl";
import styles from './ReservationButton.module.scss';

export default function ReservationButton(){
  const t = useTranslations("Main");

  const openQuandoPage = () => {
    window.open('https://www.quandoo.fi/fi/checkout-widget/widget?merchantId=103254&primaryColor=000000&theme=dark&aid=146&utm_source=quandoo-partner&utm_medium=widget-link', '_blank');
  };
  return (
    <button
      className={styles.btn_main}
      onClick={openQuandoPage}
>
      {t("reservation")}
    </button>
  );
};


