import styles from "./UserCard.module.css";
export const UserCard = ({
  name,
  company,
  city,
  imgSrc,
}: {
  name: string;
  company: string;
  city: string;
  imgSrc: string;
}) => {
  return (
    <>
      <div>
        <img src={imgSrc} alt="Фото пользователя" className={styles.img} />
      </div>
      <div className={styles.text_block}>
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
      </div>
    </>
  );
};
