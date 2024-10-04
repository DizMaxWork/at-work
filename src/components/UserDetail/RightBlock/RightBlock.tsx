import { useState } from "react";
import { FormItem, IState } from "../FormItem/FormItem";
import styles from "./RightBlock.module.css";
import { PopUp } from "../PopUp/PopUp";
import { useSelector } from "react-redux";
export const RightBlock = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const user = useSelector((state: IState) => state.user.user);
  const handleSave = (e: any) => {
    e.preventDefault();
    if (
      !user.username ||
      !user.name ||
      !user.email ||
      !user.city ||
      !user.phone ||
      !user.company
    ) {
      setPopupVisible(false);
    } else setPopupVisible(true);
    setTimeout(() => setPopupVisible(false), 5000);
  };

  return (
    <>
      {isPopupVisible && <PopUp setPopupVisible={setPopupVisible} />}
      <div className={styles.block}>
        <h2 className={styles.title}>Данные профиля</h2>
        <form>
          <FormItem
            info="Имя"
            type="text"
            value={user.username}
            text="username"
          />
          <FormItem info="Никнейм" type="text" value={user.name} text="name" />
          <FormItem info="Почта" type="email" value={user.email} text="email" />
          <FormItem info="Город" type="text" value={user.city} text="city" />
          <FormItem
            info="Телефон"
            type="phone"
            value={user.phone}
            text="phone"
          />
          <FormItem
            info="Название компании"
            type="text"
            value={user.company}
            text="company"
          />
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
