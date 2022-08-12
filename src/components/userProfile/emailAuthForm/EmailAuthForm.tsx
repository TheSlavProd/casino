import React, { useState } from 'react'

import { Input, Checkbox } from 'baseComponents'
import { AuthenticationButtons } from 'components/userProfile'

import styles from './EmailAuthForm.module.css'

interface IAuthData {
  email: string;
  password: string;
  promocode: string;
}

interface IProps {
  onLoginClick: () => void;
  onSignUpClick: () => void;
  isLogin: boolean;
}

export const EmailAuthForm: React.FC<IProps> = ({ onLoginClick, onSignUpClick, isLogin }) => {
  const [authData, setAuthData] = useState<IAuthData>({
    email: '',
    password: '',
    promocode: '',
  })

  const [termsAreChecked, setTermsAreChecked] = useState<boolean>(false)

  const toggleCheckbox = () => setTermsAreChecked(!termsAreChecked)

  const { email, password, promocode } = authData

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    setAuthData(prevValues => ({ ...prevValues, [name]: value }))
  }

  return (
    <div className={styles.emailAuthForm}>
      <div className={styles.inputs}>
        <Input
          type="email"
          value={email} 
          onChange={handleInputChange} 
          placeholder="E-Mail" 
          name="email"
          className={styles.emailInput}
        />

        <Input
          type="password"
          value={password}
          onChange={handleInputChange}
          placeholder="Password"
          forgotPasswordLabel
          name="password"
        />
      </div>

      {!isLogin && (
        <div className={styles.promocodeAndTerms}>
          <Input
            type="text"
            value={promocode} 
            onChange={handleInputChange} 
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