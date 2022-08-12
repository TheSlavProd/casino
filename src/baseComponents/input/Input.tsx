import React, { useState, HTMLInputTypeAttribute, RefObject } from 'react'
import cx from 'classnames'

import EyeIcon from './assets/eye.svg'
import CopyIcon from './assets/copy.svg'

import styles from './Input.module.css'

interface IProps {
  value: string;
  type: HTMLInputTypeAttribute;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  forgotPasswordLabel?: boolean;
  name?: string;
  ref?: RefObject<HTMLInputElement>;
  disabled?: boolean;
  label?: string;
  copy?: boolean;
  paste?: boolean;
  className?: string;
  maxLength?: number;
}

export const Input: React.FC<IProps> = ({ 
  value,
  type,
  onChange,
  placeholder = '',
  forgotPasswordLabel = false,
  name = '',
  ref,
  disabled = false,
  label = '',
  copy = false,
  paste = false,
  maxLength,
  className,
}) => {
  const [isInFocus, setIsInFocus] = useState<boolean>(false)
  
  const passwordType = type === 'password'
  const inputType = passwordType ? (isInFocus ? 'text' : 'password') : type

  const togglePasswordVisibility = () => setIsInFocus(!isInFocus)

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(value);
  }

  const pasteText = async () => {
    const text = await window.navigator.clipboard.readText()
    // onChange(text)
  }

  return (
    <div className={cx({
        [styles.inputWrapper]: true, 
        [styles.copyInput]: copy,
      }, className)}>
      
      {(label || forgotPasswordLabel) && (
        <div className={styles.labelArea}>
          {label && <p>{label}</p>}
          {forgotPasswordLabel && <p>Forgot Password</p>}
        </div>
      )}

      <input
        ref={ref}
        name={name} 
        value={value}
        type={inputType}
        onChange={onChange}
        maxLength={maxLength}
        disabled={disabled}
        className={styles.input}
        placeholder={placeholder} 
      />
      
      {passwordType && (
        <img 
          src={EyeIcon} 
          alt="Show password" 
          onClick={togglePasswordVisibility}
        />
      )}

      {copy && (
        <img 
          className={styles.copyIcon}
          onClick={copyToClipboard}
          src={CopyIcon} 
          alt="Copy" 
        />
      )}

      {paste && (
        <p className={styles.pasteIcon} onClick={pasteText}>Paste</p>
      )}

    </div>
  )
}