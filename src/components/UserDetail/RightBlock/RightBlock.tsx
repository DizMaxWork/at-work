import { useState } from "react";
import { FormItem, IState } from "../FormItem/FormItem";
import styles from "./RightBlock.module.css";
import { PopUp } from "../PopUp/PopUp";
import { useSelector } from "react-redux";
export const RightBlock = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const user = useSelector((state: IState) => state.user.user);
  const handleSave = (e) => {
    // Здесь вы можете добавить логику сохранения
    e.preventDefault();
    console.log(user);

    if (
      user.name === "" ||
      user.username === "" ||
      user.email === "" ||
      user.city === "" ||
      user.type === "" ||
      user.phone === "" ||
      user.company === ""
    )
      setPopupVisible(true);
    else setPopupVisible(false);
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
