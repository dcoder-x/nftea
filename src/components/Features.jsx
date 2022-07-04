import React from 'react'
import assets from '../assets'
import styles from '../styles/Global'


const FeatureCard =({iconUrl,iconText})=>{
  return(
    <div className={`bg-none flex flex-col p-8 m-5 rounded-lg text-white font-semibold`}>
      <img src={iconUrl} className={` w-20`} alt="" />
      {iconText}
    </div>
  )
}
const Features = () => {

  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`} >
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.pText} ${styles.whiteText} `}>
            Nftea was developed with  a cross-platform technology,React Native
          </p>
        </div>
        <div className={`${styles.flexWrap}`}>
          <FeatureCard iconText={'React Native'} iconUrl={assets.react} />
          <FeatureCard iconText={'JavaScript'} iconUrl={assets.javascript} />
        </div>
      </div>
    </div>
  )
}

export default Features