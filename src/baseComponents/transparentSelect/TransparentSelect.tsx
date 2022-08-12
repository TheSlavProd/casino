import React, { useState, useRef } from 'react'
import cx from 'classnames'
import { useOutsideClick } from 'utils'

import CarretIcon from './assets/carret.svg'

import styles from './TransparentSelect.module.css'

interface IOption {
  label: string;
  value: string;
  img?: string;
}

interface IProps {
  options: IOption[];
  label?: string;
  className?: string;
  wrapperClassName?: string;
  optionsClassName?: string;
  optionClassName?: string;
  selectedOptionsClassName?: string;
}

export const TransparentSelect: React.FC<IProps> = ({ 
  options, 
  label, 
  className, 
  wrapperClassName, 
  optionsClassName,
  optionClassName,
  selectedOptionsClassName 
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<IOption>(options[0])
  const selectRef = useRef(null)

  const closeSelect = () => setIsOpen(false)

  const handleOptionClick = (option: IOption) => {
    setIsOpen(false)
    setSelectedOption(option)
  }

  const toggleSelect = () => setIsOpen(!isOpen)

  useOutsideClick(selectRef, closeSelect)

  return (
    <div ref={selectRef} className={cx([styles.transparentSelect, className])}>

      {label && <p className={styles.label}>{label}</p>}
      
      <div 
        className={cx({
          [styles.transparentSelectWrapper]: true,
          [styles.selectIsOpen]: isOpen,
        }, wrapperClassName)}
      >
        <div onClick={toggleSelect} className={cx([styles.selectedOption, selectedOptionsClassName])}>
          <div className={styles.labelAndImage}>
            {selectedOption.img && <img src={selectedOption.img} alt={selectedOption.label} /> }
            <p>{selectedOption.label}</p>
          </div>
          <img className={styles.caret} src={CarretIcon} alt="Toggle" />
        </div>

        <div 
          className={cx({
            [styles.options]: true,
            [styles.openedOptions]: isOpen,
          }, optionsClassName)}
        >
          {options.map((option: IOption) => (
            <p 
              onClick={() => handleOptionClick(option)} 
              key={option.value} 
              className={cx([styles.option, optionClassName])}
            > 
              {option.img && <img src={option.img} alt={option.label} />}
              {option.label}
            </p>
          ))}
        </div>

      </div>
    </div>
  )
}