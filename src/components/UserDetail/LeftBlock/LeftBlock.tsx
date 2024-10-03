import styles from "./LeftBlock.module.css";
export const LeftBlock = () => {
  return (
    <div className={styles.block}>
      <img src="/big-user.png" alt="Пользователь" className={styles.img} />
      <div className={styles.text_block}>
        <div className={styles.selectedTxt}>Данные профиля</div>
        <div className={styles.unselectedTxt}>Рабочее пространство</div>
        <div className={styles.unselectedTxt}>Приватность</div>
        <div className={styles.unselectedTxt}>Безопасность</div>
      </div>
    </div>
  );
};
