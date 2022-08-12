import React from 'react'

import cx from 'classnames'

import USDTIcon from './assets/usdt.svg'
import CaretIcon from './assets/caret.svg'

import styles from './CryptoInput.module.css'

interface IProps {
  value: number;
  onChange: (value: number) => void;
  label: string;
  minValue: number;
  currency: string;
  className?: string;
}

export const CryptoInput: React.FC<IProps> = ({ 
  value, 
  onChange, 
  label, 
  minValue, 
  currency,
  className,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseFloat(event.target.value)
    onChange(parsedValue)
  }

  return (
    <div className={cx([styles.cryptoInput, className])}>
      
      <div className={styles.labelArea}>
        <p>{label}</p>
        <p>Min: {minValue}$</p>
      </div>

      <div className={styles.currency}>
        <img src={USDTIcon} alt="Currency" />
        <p>{currency}</p>
        <img src={CaretIcon} alt="Caret" />
      </div>
      
      <input type="number" value={value} min={minValue} onChange={handleChange} />
      
      <div className={styles.buttons}>
        <button>Min</button>
        <button>25%</button>
        <button>50%</button>
        <button>Max</button>
      </div>

    </div>
  )
}