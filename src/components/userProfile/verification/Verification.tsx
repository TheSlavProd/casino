import React, { useState } from 'react'
import cardValidator from 'card-validator'

import { Input } from 'baseComponents'

import VerificationIcon from './assets/verification.svg'
import OkayIcon from './assets/okay.svg'
import FalseIcon from './assets/false.svg'
import PhotoIcon from './assets/photo.svg'

import styles from './Verification.module.css'

const numbersRegExp = /^-?\d*\.?\d*$/

export const Verification: React.FC = () => {
  const [cardNumber, setCardNumber] = useState<string>('')
  const [isDisabled, setIsDisabled] = useState<boolean>(true)

  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    
    if (numbersRegExp.test(value)) {
      const validation = cardValidator.number(value)
      setIsDisabled(!validation.isValid)
      setCardNumber(value)
    }
  }

  return (
    <div className={styles.verification}>

      <div className={styles.title}>
        <div className={styles.titleIcon}>
          <img src={VerificationIcon} alt="Verification" />
        </div>
        <p>Identity Verification</p>
      </div>

      <div className={styles.photoAndRules}>
        
        <div className={styles.photo}>
          
          <div className={styles.photoUpload}>
            <img src={PhotoIcon} alt="Upload" />
            <p>Upload Image Of Your <br /> Passport</p>
            <input type="file" />
            <button>Upload</button>
          </div>
          
          <p className={styles.uploadDescription}>File size must be between 10kb and 512 kb in jpg/jpg/png format.</p>
        </div>
        
        <div className={styles.rules}>
          <div className={styles.rule}>
            <img src={OkayIcon} alt="Okay" />
            <p>Goverment - Issued</p>
          </div>

          <div className={styles.rule}>
            <img src={FalseIcon} alt="No" />
            <p>No Black And White Images</p>
          </div>
          
          <div className={styles.rule}>
            <img src={OkayIcon} alt="Okay" />
            <p>Original Full-Size, Unedited Documents</p>
          </div>
          
          <div className={styles.rule}>
            <img src={FalseIcon} alt="No" />
            <p>No Edited Or Expired Documents</p>
          </div>
          
          <div className={styles.rule}>
            <img src={OkayIcon} alt="Okay" />
            <p>Readable, Well-it, Coloured Images</p>
          </div>
        </div>
      </div>

      <div className={styles.cardNumber}>
        <Input 
          className={styles.cardNumberInput}
          placeholder="Add you card number (visa, master card)"
          value={cardNumber}
          maxLength={16}
          onChange={handleCardNumberChange} 
          type="text" 
        />
        <button disabled={isDisabled}>Save Changes</button>
      </div>
    </div>
  )
}