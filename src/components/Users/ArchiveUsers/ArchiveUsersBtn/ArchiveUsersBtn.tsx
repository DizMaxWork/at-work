import styles from "./ArchiveUsersBtn.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setArchiveUsers,
  setUser,
  setUsers,
} from "../../../../redux/slices/userSlice";
import { useState } from "react";
import { User } from "../../users.types";

export const ArchiveUsersBtn = ({
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
  onToggleBlock: (prev) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsOpen((prev: boolean) => !prev);
    onToggleBlock((prev) => !prev);
    dispatch(setUser({ id, name, username, city, email, phone, company }));
  };
  const users = useSelector(
    (state: { user: { users: User[] } }) => state.user.users
  );
  const archiveUsers = useSelector(
    (state: { user: { archiveUsers: User[] } }) => state.user.archiveUsers
  );
  const handleActive = () => {
    dispatch(
      setUsers([...users, archiveUsers.filter((user) => user.id === id)[0]])
    );
    dispatch(setArchiveUsers(archiveUsers.filter((user) => user.id !== id)));
    setIsOpen(false);
  };
  return (
    <div>
      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdown_item} onClick={handleActive}>
            Активировать
          </div>
        </div>
      )}
      <button className={styles.btn} onClick={toggleDropdown}>
        {document.documentElement.clientWidth === 800 ? (
          <img src="/small-dots.svg" alt="Кнопки модификации" />
        ) : (
          <img src="/menu-dots.svg" alt="Кнопки модификации" />
        )}
      </button>
    </div>
  );
};
