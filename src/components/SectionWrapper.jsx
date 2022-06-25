import React from 'react'
import styles from '../styles/Global'
import assets from '../assets'

const SectionWrapper = ({title, description, showBtn, mockupImg, banner}) => {
  return (
    <div className={`min-h-screen ${styles.section} ${styles.bgWhite} ${banner}`}>
      <div className={`flex items-center ${styles.boxClass}`}>
        <div classname={`${styles.descDiv}`}>

        </div>
      </div>
     <h1>{title}</h1>
     <h1>{description}</h1>
     <img src={mockupImg} alt="MockUp"/>
    </div>
  )
}

export default SectionWrapper
