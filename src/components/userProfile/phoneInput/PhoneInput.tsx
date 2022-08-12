import React, { useEffect, useState } from 'react'
import PhoneNumberInput from 'react-phone-number-input'

import { getLocale } from 'utils'

import styles from './PhoneInput.module.css'
import './PhoneInput.css'

interface IProps {
  value: string;
  onChange: (value: string) => void;
}

export const PhoneInput: React.FC<IProps> = ({ value, onChange }) => {
  const [currentLocale, setCurrentLocale] = useState<string>('en')

  useEffect(() => {
    const locale = getLocale()
    setCurrentLocale(locale)
  }, [])

  return (
    <div className={styles.phoneInputWrapper}>
      <PhoneNumberInput
        className={styles.phoneInput}
        international
        countryCallingCodeEditable={false}
        defaultCountry={currentLocale.toUpperCase() as any}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}