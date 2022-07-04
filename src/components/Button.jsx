import React from 'react'
import styles from '../styles/Global'

const Button = ({assetUrl, link }) => {
  return (
    <a href={link}>
      <div className={styles.btnBlack} >
        <img src={assetUrl} className={styles.btnIcon} alt="expo_icon" />
        <div className={`flex flex-col justify-start ml-4`}>
          <p className={`font-normal text-Xs ${styles.btnText}`}>
            View it on
          </p>
          <p className={`font-normal text-sm ${styles.btnText}`}>
          Expo Store
          </p>
        </div>
      </div>
    </a>
  )
}

export default Button