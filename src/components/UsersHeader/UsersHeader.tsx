import styles from "./UsersHeader.module.css";
export const UsersHeader = () => {
  return (
    <header className={styles.headerBG}>
      <div className={styles.block}>
        <div className={styles.leftBlock}>
          <img src="/at-work/logo-sign.svg" alt="Логотип" />
          <span className={styles.title}>
            at-<strong>work</strong>
          </span>
        </div>
        <div className={styles.rightBlock}>
          <img
            src="/at-work/heart.svg"
            alt="Лайк"
            className={styles.smallImg}
          />
          <img
            src="/at-work/bell.svg"
            alt="Уведобления"
            className={styles.smallImg}
          />
          <div className={styles.userBlock}>
            <img src="/at-work/small-user.png" alt="Пользователь" />
            <span className={styles.userName}>Иванов Иван</span>
          </div>
        </div>
      </div>
    </header>
  );
};
