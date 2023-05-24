import React from 'react';
import styles from "./SideBar.module.css";

const SideBar = ({ children }) => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebar}>
           <div className={styles.filterContainer}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
