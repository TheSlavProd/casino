import React, { useRef, useState } from 'react'
import cx from 'classnames'
import CarretIcon from './assets/carret.svg'

import styles from './Dropdown.module.css'
import { useOutsideClick } from 'utils';

interface IOption {
  label: string;
  value: string;
}

interface IProps {
  classname?: string;
  category: string;
  options: IOption[];
  option: IOption | null | undefined;
  onChange: (option: IOption) => void;
}

export const Dropdown: React.FC<IProps> = ({ option, onChange, options, category, classname }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  const toggleDropdown = () => setIsOpen(!isOpen)

  const closeDropdown = () => setIsOpen(false)

  const handleOptionClick = (option: IOption) => {
    onChange(option)
    closeDropdown()
  }

  useOutsideClick(dropdownRef, closeDropdown)

  return (
    <div
      ref={dropdownRef}
      className={cx(classname, {
        [styles.dropdown]: true,
        [styles.dropdownOpened]: isOpen,
      })}
    >
      
      <div onClick={toggleDropdown} className={styles.currentValueAndCategory}>
        {(option && option.value) ? (
          <p className={styles.currentValue}>{option.value}</p>
        ) : (
          <p className={styles.placeholder}>Select option</p>
        )}

        <div className={styles.categoryAndToggle}>
          <p className={styles.category}>{category}</p>
          <button className={cx({
            [styles.toggleButton]: true,
            [styles.openedToggleButton]: isOpen,
          })}>
            <img src={CarretIcon} alt="Toggle" />
          </button>
        </div>
      </div>

        <div className={cx({
          [styles.options]: true,
          [styles.optionsOpened]: isOpen,
        })}>
          {options.map((option: IOption, index: number) => (
            <p 
              onClick={() => handleOptionClick(option)} 
              className={styles.option} 
              key={`${option.value}-${index}`}
            >
              {option.label}
            </p>
          ))}
        </div>
    </div>
  )
}