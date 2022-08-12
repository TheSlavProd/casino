import React from 'react'

import { useAppSelector } from 'utils'

import VisaIcon from './assets/visa.svg'
import MasterCardIcon from './assets/mastercard.svg'
import GPayIcon from './assets/gpay.svg'
import RevolutIcon from './assets/revolut.svg'

import Background2 from './assets/background-2.svg'
import Background3 from './assets/background-3.svg'
import Background1Purple from './assets/background-1.svg'
import Background1Green from './assets/background-1-green.svg'

import styles from './NeedCrypto.module.css'

export const NeedCrypto: React.FC = () => {
  const activeTheme = useAppSelector((state) => state.ui.activeTheme)
  const Background1 = activeTheme === 'PURPLE' ? Background1Purple : Background1Green
  const backgroundImage = `url(${Background2}), url(${Background3}), url(${Background1})`
  
  return (
    <div style={{ backgroundImage }} className={styles.needCryptoBanner}>
      
      <div className={styles.images}>

        <div className={styles.textAndButton}>
          <div className={styles.text}>
            <p className={styles.needCryptoText}>Need Crypto?</p>
            <p className={styles.buyWith}>Buy With</p>
          </div>
          <div className={styles.mobileButtonContainer}>
            <button>Buy Crypto</button>
            <div className={styles.shadow} />
          </div>
        </div>
        
        <div className={styles.paymentSystems}>
          <img className={styles.visa} src={VisaIcon} alt="Visa" />
          <img className={styles.mastercard} src={MasterCardIcon} alt="Mastercard" />
          <img className={styles.gpay} src={GPayIcon} alt="GPay" />
          <img className={styles.revolut} src={RevolutIcon} alt="Revolut" />
        </div>

      </div>

      <div className={styles.buttonContainer}>
        <button>Buy Crypto</button>
        <div className={styles.shadow} />
      </div>
    
    </div>
  )
}