import React, { useState }  from 'react'

import { Input, Checkbox } from 'baseComponents'
import { AuthenticationButtons, PhoneInput } from 'components/userProfile'

import styles from './PhoneAuthForm.module.css'

interface IProps {
  onLoginClick: () => void;
  onSignUpClick: () => void;
  isLogin: boolean;
}

export const PhoneAuthForm: React.FC<IProps> = ({ onLoginClick, onSignUpClick, isLogin }) => {
  const [phone, setPhone] = useState<string>('')
  const [promocode, setPromocode] = useState<string>('')
  const [termsAreChecked, setTermsAreChecked] = useState<boolean>(false)

  const toggleCheckbox = () => setTermsAreChecked(!termsAreChecked)

  const handlePromocodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPromocode(event.target.value)
  }

  const handlePhoneChange = (value: string) => setPhone(value)

  return (
    <div className={styles.phoneAuthForm}>

      <PhoneInput value={phone} onChange={handlePhoneChange} />

      {!isLogin && (
        <div className={styles.promocodeAndTerms}>
          <Input
            type="text"
            value={promocode} 
            onChange={handlePromocodeChange} 
            placeholder="Referal/Promo Code (Optinal)" 
            name="promocode" 
          />
          <Checkbox className={styles.checkbox} checked={termsAreChecked} onClick={toggleCheckbox}>
            I agree to the terms of the license agreement and privacy 
          </Checkbox>
        </div>
      )}

      <AuthenticationButtons 
        onLoginClick={onLoginClick} 
        onSignUpClick={onSignUpClick} 
        isLogin={isLogin} 
      />
    </div>
  )
}