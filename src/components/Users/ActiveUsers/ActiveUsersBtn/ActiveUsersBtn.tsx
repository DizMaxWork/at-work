import { useState } from "react";
import styles from "./ActiveUsersBtn.module.css";
import { Link } from "react-router-dom";
import {
  setArchiveUsers,
  setUser,
  setUsers,
} from "../../../../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../users.types";

export const ActiveUserBtn = ({
  id,
  name,
  username,
  city,
  email,
  phone,
  company,
  onToggleBlock,
}: {
  id: number;
  name: string;
  username: string;
  city: string;
  email: string;
  phone: string;
  company: string;
  onToggleBlock: (prev: any) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    onToggleBlock((prev: any) => !prev);
    dispatch(setUser({ id, name, username, city, email, phone, company }));
  };
  const users = useSelector(
    (state: { user: { users: User[] } }) => state.user.users
  );
  const archiveUsers = useSelector(
    (state: { user: { archiveUsers: User[] } }) => state.user.archiveUsers
  );
  const handleDelete = () => {
    const filteredUsers = users.filter((user) => user.id !== id);
    dispatch(setUsers(filteredUsers));
    setIsOpen(false);
  };
  const handleArchive = () => {
    const tets = users.filter((user) => user.id === id);
    dispatch(setUsers(users.filter((user) => user.id !== id)));
    dispatch(setArchiveUsers([...archiveUsers, tets[0]]));
    setIsOpen(false);
  };
  return (
    <>
      <div>
        {isOpen && (
          <div className={styles.dropdown}>
            <Link to={`/at-work/user/${id}`} className={styles.dropdown_item}>
              Редактировать
            </Link>
            <div className={styles.dropdown_item} onClick={handleArchive}>
              Архивировать
            </div>
            <div className={styles.dropdown_item} onClick={handleDelete}>
              Скрыть
            </div>
          </div>
        )}
      </div>

      {document.documentElement.clientWidth === 800 ? (
        <div className={styles.dots} onClick={toggleDropdown}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      ) : (
        <div className={styles.dots} onClick={toggleDropdown}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      )}
    </>
  );
};
