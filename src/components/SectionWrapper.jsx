import React from 'react'
import styles from '../styles/Global'
import assets from '../assets'
import Button from './Button'

const SectionWrapper = ({title,desc,showBtn,mockupImg,banner,reverse}) => {
  return (
    <div className={`min-h-screen ${styles.section} 
    ${reverse ? styles.bgWhite:styles.bgPrimary} ${banner}`} >
      <div className={` flex items-center w-11/12 sm:w-full minmd:w-3/4 ${reverse?styles.boxReverseClass:styles.boxClass}`}>
        <div className={`${styles.descDiv} ${ reverse ? 'fadeRightMini':'fadeLeftMini' } ${ reverse ? styles.textRight:styles.textLeft } ${ !reverse ?`text-white`:`text-black` }`}>
          <h1 className={`${styles.h1Text}  `} >{title}</h1>
          <p className={`${styles.descriptionText}`}>
          {desc}
          </p>
          {showBtn && <Button 
          assetUrl={assets.expo}
          link='https://expo.dev/@aeonx/nftmarket?serviceType=classic&distribution=expo-'
          />}

        </div>
        <div className={` flex-1 ${styles.flexCenter} p-8 sm:px-0 `} >
            
            <img src={mockupImg} alt="hero-mockup" className={`${styles.sectionImg} ${ reverse ? 'fadeLeftMini':'fadeRightMini' }` } />
          </div>
      </div>
     
      
    </div>
  )
}

export default SectionWrapper