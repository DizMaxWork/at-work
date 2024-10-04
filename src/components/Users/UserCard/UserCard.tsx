import { useState } from "react";
import { ActiveUserBtn } from "../ActiveUsers/ActiveUsersBtn/ActiveUsersBtn";
import { ArchiveUsersBtn } from "../ArchiveUsers/ArchiveUsersBtn/ArchiveUsersBtn";
import styles from "./UserCard.module.css";
export const UserCard = ({
  name,
  company,
  city,
  imgSrc,
  id,
  username,
  email,
  phone,
}: {
  name: string;
  company: string;
  city: string;
  imgSrc: string;
  id: number;
  username: string;
  email: string;
  phone: string;
}) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  return (
    <>
      <div>
        <img src={imgSrc} alt="Фото пользователя" className={styles.img} />
      </div>

      <div className={styles.text_block}>
        {!isOpenDropdown && (
          <div className={styles.text_content}>
            <h2
              className={
                imgSrc === "user.png" ? styles.userTitle : styles.archiveTitle
              }
            >
              {name}
            </h2>
            <p className={styles.company}>{company}</p>
            <p className={styles.city}>{city}</p>
          </div>
        )}

        {imgSrc === "user.png" ? (
          <ActiveUserBtn
            id={id}
            username={username}
            name={name}
            city={city}
            email={email}
            phone={phone}
            company={company}
            onToggleBlock={setIsOpenDropdown}
          />
        ) : (
          <ArchiveUsersBtn
            id={id}
            username={username}
            name={name}
            city={city}
            email={email}
            phone={phone}
            company={company}
            onToggleBlock={setIsOpenDropdown}
          />
        )}
      </div>
    </>
  );
};
