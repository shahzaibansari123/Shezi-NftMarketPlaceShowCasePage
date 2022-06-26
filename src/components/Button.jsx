import React from 'react'
import styles from '../styles/Global'

const Button = ({ assetUrl, Link }) => {
  return (
    <div className={styles.btnBlack}
      onClick={() => window.open(Link, '_blank')}>
      Button
    </div >
  )
}

export default Button