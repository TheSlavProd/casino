import React from 'react'

import cx from 'classnames'

import styles from './AuthenticationButtons.module.css'

interface IProps {
  onLoginClick: () => void;
  onSignUpClick: () => void;
  isLogin: boolean;
}

export const AuthenticationButtons: React.FC<IProps> = ({ onLoginClick, onSignUpClick, isLogin }) => {
  return (
    <div className={styles.authenticationButtons}>
      <button
        onClick={onLoginClick}
        className={cx({
          [styles.button]: true,
          [styles.activeButton]: isLogin,
        })}
      >
        Log In
      </button>
      <button
        onClick={onSignUpClick}
        className={cx({
          [styles.button]: true,
          [styles.activeButton]: !isLogin
        })}
      >
        Sign Up
      </button>
    </div>
  )
}