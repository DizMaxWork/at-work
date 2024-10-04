import styles from "./ArchiveUsers.module.css";
import { User } from "../users.types";
import { useSelector } from "react-redux";
import { ArchiveUsersBtn } from "./ArchiveUsersBtn/ArchiveUsersBtn";
import { UserCard } from "../UserCard/UserCard";
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
            <UserCard
              name={user.name}
              city={user.address.city}
              company={user.company.name}
              imgSrc="archiveCard.png"
            />
            <ArchiveUsersBtn
              id={user.id}
              username={user.username}
              name={user.company.name}
              city={user.address.city}
              email={user.email}
              phone={user.phone}
              company={user.company.name}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
