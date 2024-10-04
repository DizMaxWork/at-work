import styles from "./UsersHeader.module.css";
export const UsersHeader = () => {
  return (
    <header className={styles.headerBG}>
      <div className={styles.block}>
        <div className={styles.leftBlock}>
          <img src="/logo-sign.svg" alt="Логотип" />
          <span className={styles.title}>
            at-<strong>work</strong>
          </span>
        </div>
        <div className={styles.rightBlock}>
          <img src="/heart.svg" alt="Лайк" className={styles.smallImg} />
          <img src="/bell.svg" alt="Уведобления" className={styles.smallImg} />
          <div className={styles.userBlock}>
            <img src="/small-user.png" alt="Пользователь" />
            <span className={styles.userName}>Иванов Иван</span>
          </div>
        </div>
      </div>
    </header>
  );
};
