import styles from "./ActiveUsers.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../users.types";
import { setUsers } from "../../../redux/slices/userSlice";
import { CustomCardBtn } from "./ActiveUsersBtn/ActiveUsersBtn";
import { UserCard } from "../UserCard/UserCard";

export const ActiveUsers = () => {
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
    <ul className={styles.block}>
      {users.map((user: User) => (
        <li key={user.id} className={styles.card}>
          <UserCard
            name={user.name}
            city={user.address.city}
            company={user.company.name}
            imgSrc="user.png"
          />
          <CustomCardBtn
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
  );
};
