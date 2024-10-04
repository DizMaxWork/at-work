import styles from "./PopUp.module.css";
export const PopUp = ({ setPopupVisible }: { setPopupVisible: any }) => {
  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <button onClick={closePopup} className={styles.closeBtn} />
        <img src="/at-work/Icon.svg" alt="Галочка" />
        <p className={styles.popupText}>Изменения сохранены!</p>
      </div>
    </div>
  );
};
