import { Link } from "react-router-dom";
import styles from "./CustomCardBtn.module.css";
export const CustomCardBtn = ({ id }: { id: number }) => {
  return (
    <Link to={`/user/${id}`}>
      <button className={styles.btn}>
        <img src="menu-dots.svg" alt="Кнопки модификации" />
      </button>
    </Link>
  );
};
