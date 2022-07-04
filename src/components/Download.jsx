import React from 'react'
import styles from '../styles/Global'
import assets from '../assets'
const Download = () => {
  return (
    <div className={styles.section} >
      <div className={`flex flex-col ${styles.subSection}`}>
        <h1 className={styles.h1Text}>
          App will soon be available for downloads on your favorite stores.
        </h1 >
        <p className={styles.pText}>
          We understand how exicted you are about this. 🤩

          track our progress on <a href="" className={` text-blue-500`} >github</a>
        </p>
        <a href="https://github.com/dcoder-x/NFT-market.git">
        <button className={` p-2 w-max bg-sky-600 text-white font-normal rounded-sm px-4`}>
          Anticipate
        </button>
        </a>

        <img className={`flex-1 w-3/4`} src={assets.scene} alt="" />
       
      </div>

    </div>
  )
}

export default Download