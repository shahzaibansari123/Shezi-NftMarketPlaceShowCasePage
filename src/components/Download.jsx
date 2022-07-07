import React from 'react'
import styles from '../styles/Global'
import assets from '../assets'

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection } flex-col text-center`}> 
      <div>
        <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download the Souce Code</h1>
        <p className={`${styles.pText} ${styles.blackText}`}>Get the full Source code on Github</p>

      </div>

      </div>
    </div>
  )
}

export default Download
