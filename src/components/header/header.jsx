import { Language } from "../language/language";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_context}>
        <h2>You are invited</h2>
        <p>Saturday, Sep 14, 2024 </p>
      </div>
      <Language />
    </header>
  );
};
