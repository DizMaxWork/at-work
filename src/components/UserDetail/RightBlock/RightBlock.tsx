import { useState } from "react";
import { FormItem } from "../FormItem/FormItem";
import styles from "./RightBlock.module.css";
import { PopUp } from "../PopUp/PopUp";
export const RightBlock = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const handleSave = (e) => {
    // Здесь вы можете добавить логику сохранения
    setPopupVisible(true);
    e.preventDefault();
  };
  return (
    <>
      {isPopupVisible && <PopUp setPopupVisible={setPopupVisible} />}
      <div className={styles.block}>
        <h2 className={styles.title}>Данные профиля</h2>
        <form>
          <FormItem info="Имя" type="text" />
          <FormItem info="Никнейм" type="text" />
          <FormItem info="Почта" type="email" />
          <FormItem info="Город" type="text" />
          <FormItem info="Телефон" type="phone" />
          <FormItem info="Название компании" type="text" />
          <div>
            <button className={styles.btn} onClick={handleSave}>
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
