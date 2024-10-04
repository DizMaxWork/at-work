import styles from "./Users.module.css";
import { ArchiveUsers } from "./ArchiveUsers/ArchiveUsers";
import { ActiveUsers } from "./ActiveUsers/ActiveUsers";
export const Users = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Активные</h1>
      <ActiveUsers />
      <ArchiveUsers />
    </div>
  );
};
