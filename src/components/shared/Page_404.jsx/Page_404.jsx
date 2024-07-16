import styles from "./PageNotFound.module.scss";
import { useTranslations } from "next-intl";

export const Page_404 = () => {
  const t = useTranslations("Page_404");

  return (
    <main className={styles.mainErr}>
      <div className={styles.wrapper}>
        <h1 className={styles.numbers}>404</h1>
        <p>{t('title')}</p>
      </div>
    </main>
  );
};