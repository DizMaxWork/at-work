import { useState } from "react";
import styles from "./CustomCardBtn.module.css";
import { Link } from "react-router-dom";
import { setUser, setUsers } from "../../../redux/slices/userSlice";
import { useDispatch } from "react-redux";

export const CustomCardBtn = ({
  id,
  name,
  username,
  city,
  email,
  phone,
  company,
}: {
  id: number;
  name: string;
  username: string;
  city: string;
  email: string;
  phone: string;
  company: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    dispatch(setUser({ id, name, username, city, email, phone, company }));
  };

  const handleDelete = () => {
    dispatch(setUsers(id));
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <div className={styles.dropdown}>
          <Link to={`/user/${id}`} className={styles.dropdown_item}>
            Редактировать
          </Link>
          <div className={styles.dropdown_item} onClick={handleDelete}>
            Удалить
          </div>
          <div className={styles.dropdown_item}>Архивировать</div>
        </div>
      )}
      <button className={styles.btn} onClick={toggleDropdown}>
        {document.documentElement.clientWidth === 800 ? (
          <img src="small-dots.svg" alt="Кнопки модификации" />
        ) : (
          <img src="menu-dots.svg" alt="Кнопки модификации" />
        )}
      </button>
    </div>
  );
};
