import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { Page } from 'baseComponents'
import { 
  UserProfileNavigation, 
  Wallet, 
  UserInformation, 
  TransactionsHistory, 
  Verification 
} from 'components/userProfile'
import { Contacts, LatestBetsAndContest } from 'components/mainPage'

import styles from './UserProfile.module.css'

interface IRoute {
  component: React.ReactNode;
  path: string;
}

const routes: IRoute[] = [
  { component: <LatestBetsAndContest className={styles.bets} />, path: '/' },
  { component: <UserInformation />, path: '/user-info' },
  { component: <TransactionsHistory />, path: '/transactions' },
  { component: null, path: '/promocodes' },
  { component: null, path: '/achievements' },
  { component: <Wallet />, path: '/wallet' },
  { component: null, path: '/history-of-games' },
  { component: null, path: '/tournaments' },
  { component: null, path: '/history-of-bonuses' },
  { component: <Verification />, path: '/verification' }
]

export const UserProfile: React.FC = () => {
  return (
    <Page>
      <UserProfileNavigation />
      <Routes>
        {routes.map((route: IRoute) => (
          <Route 
            key={route.path} 
            path={route.path} 
            element={route.component} 
          />
        ))}
      </Routes>
      <Contacts className={styles.contacts} />
    </Page>
  )
}