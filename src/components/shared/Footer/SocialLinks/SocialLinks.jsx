import styles from './SocialLinks.module.scss';
import Image from 'next/image';

export default function SocialIcons ({item}) {
  const {image, name, url, text} = item;
  return(
    <div className={styles.links}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image 
          alt="image"
          src={image}
          width={50}
          height={50}
          className={styles.icon}
        />
        {text}
      </a>
    </div>
  )
}
