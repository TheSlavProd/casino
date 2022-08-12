import React from 'react'
import cx from 'classnames'

import { useAppSelector } from 'utils'
import { NavLink } from 'react-router-dom'

import AvatarImage from './assets/avatar.jpg'
import LogoutIcon from './assets/logout.svg'
import MessagesIconGreen from './assets/messages-green.svg'
import MessagesIconPurple from './assets/messages-purple.svg'
import SettingsIconGreen from './assets/settings-green.svg'
import SettingsIconPurple from './assets/settings-purple.svg'
import VeryfiedIcon from './assets/veryfied.svg'
import WalletIcon from './assets/wallet.svg'
import UserInfoIcon from './assets/user-info.svg'
import TransactionsIcon from './assets/transactions.svg'
import PromocodesIcon from './assets/promocodes.svg'
import AchievementsIcon from './assets/achievements.svg'
import HistoryOfGamesIcon from './assets/history-of-games.svg'
import MyTournamentsIcon from './assets/my-tournaments.svg'
import HistoryOfBonusesIcon from './assets/history-of-bonuses.svg'
import VerificationIcon from './assets/verification.svg'

import styles from './UserProfileNavigation.module.css'


interface IRoute {
  label: string;
  path: string;
  img: string;
}

const routes: IRoute[] = [
  { label: 'User Information', path: '/profile/user-info', img: UserInfoIcon },
  { label: 'Transactions', path: '/profile/transactions', img: TransactionsIcon },
  { label: 'Promocodes', path: '/profile/promocodes', img: PromocodesIcon },
  { label: 'Achievements', path: '/profile/achievements', img: AchievementsIcon },
  { label: 'Wallet', path: '/profile/wallet', img: WalletIcon },
  { label: 'History Of Games', path: '/profile/history-of-games', img: HistoryOfGamesIcon },
  { label: 'My Tournaments', path: '/profile/tournaments', img: MyTournamentsIcon },
  { label: 'History Of Bonuses', path: '/profile/history-of-bonuses', img: HistoryOfBonusesIcon },
  { label: 'Identity Verification', path: '/profile/verification', img: VerificationIcon }
]

export const UserProfileNavigation: React.FC = () => {
  const activeTheme = useAppSelector((state) => state.ui.activeTheme)
  const veryfied = true
  const userName = 'Poofik Eye 777'
  const purpleTheme = activeTheme === "PURPLE"

  const MessagesIcon = purpleTheme ? MessagesIconPurple : MessagesIconGreen
  const SettingsIcon = purpleTheme ? SettingsIconPurple : SettingsIconGreen

  return (
    <div className={styles.userProfileNavigation}>
      <div className={styles.profileInfo}>
        <div className={styles.userInfo}>
          
          <div className={styles.avatar}>
            <img className={styles.avatarImage} src={AvatarImage} alt="Avatar" />
            <div className={styles.veryfiedAndUserName}>
              <div className={styles.veryfied}>
                <img src={VeryfiedIcon} alt={veryfied ? 'Veryfied' : 'Unveryfied'} />
                <p>{veryfied ? 'Veryfied' : 'Unveryfied'}</p>
              </div>
              <p className={styles.userName}>{userName}</p>
            </div>
          </div>

          <button className={styles.depositNowButton}>Deposit now</button>

          <button className={styles.activeTournamentsButton}>Active tournaments</button>


        </div>

        <button className={styles.logoutButton}>
          <img src={LogoutIcon} alt="Logout" />
          <span>Logout</span>
        </button>

        <div className={styles.settingsAndMessages}>
          <button className={styles.settingsButton}>
            <img src={SettingsIcon} alt="Settings" />
            <p>Settings</p>
          </button>
          <button className={styles.settingsButton}>
            <p>Messages</p>
            <img src={MessagesIcon} alt="Messages" />
          </button>
        </div>

      </div>

      <button className={cx([styles.activeTournamentsButton, styles.activeTournamentsMobileButton])}>Active tournaments</button>

      <div className={styles.navigation}>
        {routes.map((route: IRoute) => (
          <NavLink 
            className={
              ({ isActive }) => cx({
                [styles.itemLink]: true,
                [styles.activeItemLink]: isActive,
              })
            } 
            key={route.path} 
            to={route.path}
          >
            <img src={route.img} alt={`Link to ${route.path}`} />
            <p>{route.label}</p>
          </NavLink>
        ))}
      </div>
    </div>
  )
}