import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./FormItem.module.css";
import { setUser } from "../../../redux/slices/userSlice";
export interface IState {
  user: {
    user: {
      name: string;
      username: string;
      email: string;
      city: string;
      type: string;
      phone: string;
      company: string;
    };
  };
}
export const FormItem = ({
  info,
  type,
  value,
  text,
}: {
  info: string;
  type: string;
  value: string;
  text: string;
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state: IState) => state.user.user);
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    dispatch(
      setUser({
        ...user,
        [text]: newValue,
      })
    );
  };
  return (
    <div className={styles.block}>
      <h3 className={styles.info}>{info}</h3>
      <input
        type={type}
        placeholder={info}
        value={inputValue}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
};
