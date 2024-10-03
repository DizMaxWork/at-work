import { useEffect, useState } from "react";
import { User } from "./users.types";
import styles from "./Users.module.css";
import { CustomCardBtn } from "./CustomCardBtn/CustomCardBtn";
export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const slicedData = data.slice(0, 6);
        setUsers(slicedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Активные</h1>
      <ul className={styles.block}>
        {users.map((user) => (
          <li key={user.id} className={styles.card}>
            <div>
              <img
                src="user.png"
                alt="Фото пользователя"
                className={styles.img}
              />
            </div>
            <div>
              <h2 className={styles.userTitle}>{user.username}</h2>
              <p className={styles.company}>{user.company.name}</p>
              <p className={styles.city}>{user.address.city}</p>
            </div>
            <div>
              <CustomCardBtn id={user.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
