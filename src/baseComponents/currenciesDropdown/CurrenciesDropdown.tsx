import React, { useRef } from 'react'
import cx from 'classnames'

import styles from './CurrenciesDropdown.module.css'
import { useOutsideClick } from 'utils';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ICurrency {
  name: string;
  price: string;
}

const currencies: ICurrency[] = [
  { name: 'USDT TRC20', price: '793.338436', },
  { name: 'USDT ERC20', price: '45.4536786', },
  { name: 'USDT BEP20', price: '75.6421145', },
  { name: 'USDT OMNI', price: '7.4545236', },
]

export const CurrenciesDropdown: React.FC<IProps> = ({ isOpen, onClose }) => {
  const dropdownRef = useRef<HTMLDivElement>(null)

  useOutsideClick(dropdownRef, onClose)

  return (
    <div 
      className={
        cx({
          [styles.currenciesDropdown]: true,
          [styles.dropdownOpened]: isOpen
        })
      }
      ref={dropdownRef}
    >
      {currencies.map((currency: ICurrency, index: number) => (
        <div key={index} className={styles.currency}>
          <p>{currency.name}</p>
          <p>{currency.price}</p>
        </div>        
      ))}

      <button className={styles.expandButton}>
        +
      </button>
    </div>
  )
}