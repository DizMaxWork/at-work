import { useEffect, useState } from "react";
import styles from "./Users.module.css";
import { CustomCardBtn } from "./CustomCardBtn/CustomCardBtn";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../redux/slices/userSlice";
import { User } from "./users.types";
export const Users = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const users = useSelector(
    (state: { user: { users: User[] } }) => state.user.users
  );
  const dispatch = useDispatch();
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
        dispatch(setUsers(slicedData));
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
        {users.map((user: User) => (
          <li key={user.id} className={styles.card}>
            <div>
              <img
                src="user.png"
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
              <CustomCardBtn
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
    </div>
  );
};
