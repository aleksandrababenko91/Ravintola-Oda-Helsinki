"use client";
import { useTranslations } from "next-intl";
import styles from './ReservationButton.module.scss';

export default function ReservationButton(){
  const t = useTranslations("Main");

  const openQuandoPage = () => {
    window.open('./', '_blank');
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


