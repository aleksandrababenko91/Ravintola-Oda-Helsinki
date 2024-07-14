import styles from './ContactLinks.module.scss';

export default function ContactsLinks ({item}) {
  const {name, url, text} = item;
  return(
    <div className={styles.links}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {text} {name}
      </a>
    </div>
  )
}