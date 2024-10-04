import styles from "./ArchiveUsers.module.css";
import { User } from "../users.types";
import { useSelector } from "react-redux";
import { ArchiveUsersBtn } from "./ArchiveUsersBtn/ArchiveUsersBtn";
export const ArchiveUsers = () => {
  const archiveUsers = useSelector(
    (state: { user: { archiveUsers: User[] } }) => state.user.archiveUsers
  );
  return (
    <>
      <h1 className={styles.title}>Архив</h1>
      <ul className={styles.block}>
        {archiveUsers.map((user: User) => (
          <li key={user.id} className={styles.card}>
            <div>
              <img
                src="archiveCard.png"
                alt="Фото пользователя"
                className={styles.img}
              />
            </div>
            <div className={styles.text_block}>
              <div className={styles.text_content}>
                <h2 className={styles.userTitle}>{user.username}</h2>
                <p className={styles.company}>{user.company.name}</p>
                <p className={styles.city}>{user.address.city}</p>
              </div>
              <ArchiveUsersBtn
                id={user.id}
                username={user.username}
                name={user.company.name}
                city={user.address.city}
                email={user.email}
                phone={user.phone}
                company={user.company.name}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
