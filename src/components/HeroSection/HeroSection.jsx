import ReservationButton from '../shared/ReservationButton/ReservationButton';
import styles from '../../components/HeroSection/HeroSection.module.scss';
export default function HeroSection () {
  return(
    <container className={styles.hero}>
      <ReservationButton />
    </container>
  )
}