import React from 'react'

import cx from 'classnames'

import { Link } from 'react-router-dom'

import styles from './Contacts.module.css'

interface IProps {
  className?: string;
}

export const Contacts: React.FC<IProps> = ({ className }) => {
  return (
    <div className={cx([styles.contacts, className])}>
      <div className={styles.contactsTable}>

        <div className={styles.columnWrapper}>
          <div className={styles.contactsColumn}>
            <h6>Games</h6>

            <div className={styles.contactsLinks}>
              <Link className={styles.link} to="/">About us</Link>
              <Link className={styles.link} to="/">Rules</Link>
              <Link className={styles.link} to="/">Affilita program</Link>
              <Link className={styles.link} to="/">For the agent</Link>
              <Link className={styles.link} to="/">The Blog</Link>
              <Link className={styles.link} to="/">Privacy Policy</Link>
              <Link className={styles.link} to="/">Cookie policy</Link>
              <Link className={styles.link} to="/">Contacts</Link>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.columnWrapper}>
          <div className={styles.contactsColumn}>
            <h6>Help</h6>

            <div className={styles.contactsLinks}>
              <Link className={styles.link} to="/">About us</Link>
              <Link className={styles.link} to="/">Rules</Link>
              <Link className={styles.link} to="/">Affilita program</Link>
              <Link className={styles.link} to="/">For the agent</Link>
              <Link className={styles.link} to="/">The Blog</Link>
              <Link className={styles.link} to="/">Privacy Policy</Link>
              <Link className={styles.link} to="/">Cookie policy</Link>
              <Link className={styles.link} to="/">Contacts</Link>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.columnWrapper}>
          <div className={styles.contactsColumn}>
            <h6>Info</h6>

            <div className={styles.contactsLinks}>
              <Link className={styles.link} to="/">About us</Link>
              <Link className={styles.link} to="/">Rules</Link>
              <Link className={styles.link} to="/">Affilita program</Link>
              <Link className={styles.link} to="/">For the agent</Link>
              <Link className={styles.link} to="/">The Blog</Link>
              <Link className={styles.link} to="/">Privacy Policy</Link>
              <Link className={styles.link} to="/">Cookie policy</Link>
              <Link className={styles.link} to="/">Contacts</Link>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.columnWrapper}>
          <div className={styles.contactsColumn}>
            <h6>Promotions</h6>

            <div className={styles.contactsLinks}>
              <Link className={styles.link} to="/">About us</Link>
              <Link className={styles.link} to="/">Rules</Link>
              <Link className={styles.link} to="/">Affilita program</Link>
              <Link className={styles.link} to="/">For the agent</Link>
              <Link className={styles.link} to="/">The Blog</Link>
              <Link className={styles.link} to="/">Privacy Policy</Link>
              <Link className={styles.link} to="/">Cookie policy</Link>
              <Link className={styles.link} to="/">Contacts</Link>
            </div>
          </div>
        </div>

      </div>

      <p className={styles.copyright}>©2022 Cas games. ALL RIGHTS RESERVED</p>
    </div>
  )
}