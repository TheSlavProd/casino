import React, { useState, useEffect } from 'react'
import cx from 'classnames'

import { Modal } from 'baseComponents'
import { EmailAuthForm, PhoneAuthForm } from 'components/userProfile'

import { loginRequest } from 'api/authentication'

import WalletConnectIcon from './assets/walletconnect.svg'
import MetaMaskIcon from './assets/metamask.svg'

import styles from  './AuthenticationModal.module.css'

interface IProps {
  visible: boolean;
  onClose: () => void;
  isLoginForm: boolean;
}

export const AuthenticationModal: React.FC<IProps> = ({ visible, onClose, isLoginForm }) => {
  const [byEmail, setByEmail] = useState<boolean>(true)
  const [isLogin, setIsLogin] = useState<boolean>(isLoginForm)

  useEffect(() => {
    setIsLogin(isLoginForm)
  }, [isLoginForm])

  const handleByEmailClick = () => setByEmail(true)
  const handleByPhoneClick = () => setByEmail(false)

  const onLoginClick = () => {
    if (!isLogin) {
      setIsLogin(true)
    } else {
      const loginData = new FormData()
      const username = loginData.append('username', 'superadmin')
      const password = loginData.append('password', '101918')
      console.log(loginData, username, password)
      loginRequest(loginData)
    }
  }

  const onSignUpClick = () => {
    if (isLogin) {
      setIsLogin(false)
    } else {
      // request
    }
  }

  return (
    <Modal className={styles.modal} visible={visible} onClose={onClose}>
      <div className={styles.authenticationModal}>

        <div className={styles.toggleButtons}>
          <button
            className={cx({
              [styles.toggleButton]: true,
              [styles.activeToggleButton]: byEmail,
            })}
            onClick={handleByEmailClick}
          >
            By E-Mail
          </button>
          <button
            className={cx({
              [styles.toggleButton]: true,
              [styles.activeToggleButton]: !byEmail,
            })}
            onClick={handleByPhoneClick}
          >
            By Phone
          </button>
        </div>

        {byEmail ? (
          <EmailAuthForm
            onLoginClick={onLoginClick}
            onSignUpClick={onSignUpClick}
            isLogin={isLogin}
          />
        ) : (
          <PhoneAuthForm
            onLoginClick={onLoginClick}
            onSignUpClick={onSignUpClick}
            isLogin={isLogin}
          />
        )}

        <div className={styles.loginWith}>

          <div className={styles.loginWithHeader}>
            <p>login with</p>
          </div>

          <div className={styles.authProviders}>
            <img src={MetaMaskIcon} alt="Metamask" />
            <img src={WalletConnectIcon} alt="Wallet Connect" />
            <img src={MetaMaskIcon} alt="Metamask" />
            <img src={WalletConnectIcon} alt="Wallet Connect" />
          </div>
        </div>

      </div>
    </Modal>
  )
}