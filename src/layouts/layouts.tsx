import { FC, ReactNode } from "react";
import styles from "./layouts.module.css";

interface ILayouts {
  children: ReactNode;
}

const Layout: FC<ILayouts> = ({ children }) => {
  return (
    <>
      <main id="app-container" className={styles["app-container"]}>
        {children}
      </main>
    </>
  );
};

export default Layout;
