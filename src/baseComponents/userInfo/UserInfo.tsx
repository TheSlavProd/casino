import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { AuthenticationModal } from 'components/userProfile'
import { CurrenciesDropdown } from 'baseComponents'

import AvatarIcon from './assets/avatar.svg'
import ETHIcon from './assets/eth.svg'
import CaretIcon from './assets/caret.svg'

import styles from './UserInfo.module.css'

export const UserInfo: React.FC = () => {
  const [currenciesAreOpened, setCurrenciesAreOpened] = useState<boolean>(false)
  const [isLoginForm, setIsLoginForm] = useState<boolean>(false)
  const [authModalIsVisible, setAuthModalIsVisible] = useState<boolean>(false) 
  const loggedIn = true

  const onCloseAuthModal = () => setAuthModalIsVisible(false)

  const openAuthModal = (isLogin: boolean) => {
    setIsLoginForm(isLogin)
    setAuthModalIsVisible(true)
  }

  const toggleCurrenciesDropdown = () => setCurrenciesAreOpened(!currenciesAreOpened)

  const closeCurrenciesDropdown = () => setCurrenciesAreOpened(false)

  const renderUserInfo = () => {
    if (loggedIn) {
      return (
        <div className={styles.wallet}>
          
          <Link to="/profile">
            <div className={styles.avatarContainer}>
              <img className={styles.avatar} src={AvatarIcon} alt="Avatar" />
            </div>
          </Link>
  
          <div className={styles.currencyAndAmount}>
  
            <div className={styles.currency}>
              <img className={styles.currencyLogo} src={ETHIcon} alt="Currency Logo" />
              <p className={styles.currencyName}>ETH</p>
            </div>
  
            <p className={styles.amount}>0.04320000</p>
  
          </div>

          <button onClick={toggleCurrenciesDropdown} className={styles.currenciesButton}>
            <img src={CaretIcon} alt="Currencies" />
          </button>

          <Link to="/profile/wallet">
            <button className={styles.depositButton}>Deposit <span>Now</span></button>
          </Link>

          <CurrenciesDropdown onClose={closeCurrenciesDropdown} isOpen={currenciesAreOpened} />
        
        </div>
      )
    }
  
    return (
      <div className={styles.authenticationButtons}>
        <button 
          onClick={() => openAuthModal(true)} 
          className={styles.loginButton}
        >
          Log In
        </button>

        <button
          onClick={() => openAuthModal(false)} 
          className={styles.signUpButton}
        >
          Sign Up
        </button>
      </div>
    )
  }
  return (
    <>
      {renderUserInfo()}
      {!loggedIn && (
        <AuthenticationModal isLoginForm={isLoginForm} visible={authModalIsVisible} onClose={onCloseAuthModal} />
      )}
    </>
  )
}