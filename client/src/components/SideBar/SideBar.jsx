import React, { useState } from 'react';
import styles from "./SideBar.module.css";
import { Link } from "react-router-dom";
import IconFilter from '../Icons/IconFilter';
import AddActivity from '../Icons/AddActivity'

const SideBar = ({ children }) => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebar}>
      <Link className = {styles.button} to = "/form">
                <span className={styles.actLink}><AddActivity/> Activity</span>
           </Link>
        <button className={styles.filterbtn} onClick={toggleFilters}><IconFilter/>Filters</button>
        {showFilters && (
          <div className={styles.filterContainer}>
            {children}
          </div>
        )}
         
      </div>
    </div>
  );
};

export default SideBar;
