import { FormItem } from "../FormItem/FormItem";
import styles from "./RightBlock.module.css";
export const RightBlock = () => {
  return (
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
          <button className={styles.btn}>Сохранить</button>
        </div>
      </form>
    </div>
  );
};
