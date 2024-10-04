import { Link } from "react-router-dom";
import { LeftBlock } from "./LeftBlock/LeftBlock";
import { RightBlock } from "./RightBlock/RightBlock";
import styles from "./UserDetail.module.css";
export const UserDetail = () => {
  return (
    <section className={styles.container}>
      <div className={styles.linkBlock}>
        <Link to="/at-work" className={styles.backLink}>
          Назад
        </Link>
      </div>

      <div className={styles.section}>
        <LeftBlock />
        <RightBlock />
      </div>
    </section>
  );
};
