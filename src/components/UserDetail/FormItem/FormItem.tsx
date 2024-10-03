import styles from "./FormItem.module.css";
export const FormItem = ({ info, type }: { info: string; type: string }) => {
  return (
    <div className={styles.block}>
      <h3 className={styles.info}>{info}</h3>
      <input type={type} placeholder={info} className={styles.input} />
    </div>
  );
};
