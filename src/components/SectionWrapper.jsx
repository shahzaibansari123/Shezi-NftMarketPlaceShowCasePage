import React from 'react'
import styles from '../styles/Global'
import assets from '../assets'
import Button from './Button'

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner }) => {
  return (
    <div className={`min-h-screen ${styles.section} ${styles.bgWhite} ${banner}`}>
      <div className={`flex items-center ${styles.boxClass}`}>
        <div classname={`${styles.descDiv}`}>
          <h1 className={`${styles.h1Text}`}>{title}</h1>
          <p className={`${styles.descriptionText}`}>{description}</p>
          {showBtn && (
            <Button assetUrl={assets.expo} link="deployed app" />
          )}
        </div>
        <div className={`flex-1 ${styles.flexCenter}`}>
      <img src={mockupImg} alt="MockUp" />

        </div>
      </div>
    </div>
  )
}

export default SectionWrapper
