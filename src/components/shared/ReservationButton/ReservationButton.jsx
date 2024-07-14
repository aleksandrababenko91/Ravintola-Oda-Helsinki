"use client";
 
import styles from './ReservationButton.module.scss';

export default function ReservationButton(){
  const openQuandoPage = () => {
    window.open('./', '_blank');
  };
  return (
    <button
      className={styles.btn_main}
      onClick={openQuandoPage}
>
      Reservation
    </button>
  );
};


