import React from 'react'
import styles from "./SideBar.module.css"

const SideBar = ({onClose,children}) => {
  return (
    <div className={styles.sidebarContainer}>
        <div className={styles.sidebar}>
        <button onClick={onClose}>Close</button>
        <div className={styles.filterContainer}>
            {children}
        </div>
        </div>
      
    </div>
  )
}

export default SideBar
