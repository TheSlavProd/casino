import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import cx from 'classnames'

import CloseIcon from './assets/close.svg'

import styles from './Modal.module.css'
import { useOutsideClick } from 'utils'

interface IProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode | React.ReactNode[]
  className?: string;
  containerClassname?: string
}

export const Modal: React.FC<IProps> = ({ 
  visible, 
  className, 
  containerClassname, 
  children,
  onClose,
}) => {
  const modalRef = useRef(null)
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false)

  useEffect(() => {
    setModalIsVisible(visible)
  }, [visible])

  const handleClose = () => {
    onClose()
    setModalIsVisible(false)
  }

  useOutsideClick(modalRef, handleClose)

  const body = document.querySelector('body')

  const modal = (
    <div className={cx([styles.modalContainer, containerClassname])}>
      <div ref={modalRef} className={cx([styles.modal, className])}>
        <button className={styles.closeButton} onClick={onClose}>
          <img src={CloseIcon} alt="Close" />
        </button>
        {children}
      </div>
    </div>
  )

  const Component = modalIsVisible ? modal : null

  //@ts-ignore
  return createPortal(Component, body)
}