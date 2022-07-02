import React from 'react'
 import styles from '../styles/Global'
 import assets from '../assets'

const Features = () => {
  return (
    <div className={`${styles.bgPrimary} ${styles.section} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Technologies</h1>
          <p  className={`${styles.pText} ${styles.whiteText}`}>NFTs Marketplace has been developed using a cross-platform technology, React Native</p>
        </div>
        <div className={`${styles.flexWrap}`}>
          <FeatureCard />
        </div>
      </div>

    </div>
  )
}

export default Features
