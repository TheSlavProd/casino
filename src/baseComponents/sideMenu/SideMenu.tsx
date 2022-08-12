import React, { useRef } from 'react'

import cx from 'classnames'

import { useAppSelector, useOutsideClick, useAppDispatch } from 'utils'
import { closeMenu } from 'store/uiSlice'

import { SideMenuSection, SideMenuDivider } from 'baseComponents'

import JackpotLogoIcon from './assets/jackpot-logo.png'

import HomeIcon from './assets/home.svg'
import AllGamesIcon from './assets/all-games.svg'
import TopIcon from './assets/top.svg'
import LastPlayedIcon from './assets/last-played.svg'
import NewIcon from './assets/new.svg'
import FavouritesIcon from './assets/favourites.svg'
import TableGamesIcon from './assets/table-games.svg'
import JackpotsIcon from './assets/jackpots.svg'
import BuyBonusIcon from './assets/buy-bonus.svg'
import MegawaysIcon from './assets/megaways.svg'
import ClassicSlotsIcon from './assets/classic-slots.svg'
import PromotionsIcon from './assets/promotions.svg'
import TournamentsIcon from './assets/tournaments.svg'
import FreeSpinsIcon from './assets/free-spins.svg'
import MissionsIcon from './assets/missions.svg'
import MyAccountIcon from './assets/my-account.svg'
import DepositIcon from './assets/deposit.svg'
import BalanceIcon from './assets/balance.svg'
import MyBonusesIcon from './assets/my-bonuses.svg'
import GameHistoryIcon from './assets/game-history.svg'
import LocalizationIcon from './assets/localization.svg'

import ChatIcon from './assets/chat.svg'

import DiscordIcon from './assets/discord.svg'
import SlackIcon from './assets/slack.svg'
import TelegramIcon from './assets/telegram.svg'
import ViberIcon from './assets/viber.svg'
import WhatsappIcon from './assets/watsapp.svg'
import WeChatIcon from './assets/wechat.svg'

import CloseIcon from './assets/close.svg'

import styles from './SideMenu.module.css'

const sections: ISideMenuSection[] = [
  {
    label: 'Home',
    img: HomeIcon,
    path: '/',
    children: [
      {
        label: 'All Games',
        img: AllGamesIcon,
        path: '/',
      },
      {
        label: 'TOP',
        img: TopIcon,
        path: '/',
      },
      {
        label: 'Last Played',
        img: LastPlayedIcon,
        path: '/',
      },
      {
        label: 'New',
        img: NewIcon,
        path: '/',
      },
      {
        label: 'Favourites',
        img: FavouritesIcon,
        path: '/',
      },
      {
        label: 'Table Games',
        img: TableGamesIcon,
        path: '/',
      },
      {
        label: 'Jackpots',
        img: JackpotsIcon,
        path: '/',
      },
      {
        label: 'Buy Bonus',
        img: BuyBonusIcon,
        path: '/',
      },
      {
        label: 'Megaways',
        img: MegawaysIcon,
        path: '/',
      },
      {
        label: 'Classic Slots',
        img: ClassicSlotsIcon,
        path: '/',
      },
    ]
  },
  {
    label: 'Promotions',
    img: PromotionsIcon,
    path: '/',
    children: [
      {
        label: 'Jackpots',
        img: JackpotsIcon,
        path: '/',
      },
      {
        label: 'Tournaments',
        img: TournamentsIcon,
        path: '/',
      },
      {
        label: 'Free Spins',
        img: FreeSpinsIcon,
        path: '/',
      },
      {
        label: 'Missions',
        img: MissionsIcon,
        path: '/',
      },
    ]
  },
  {
    label: 'My Account',
    img: MyAccountIcon,
    path: '/profile',
    children: [
      {
        label: 'Deposit',
        img: DepositIcon,
        path: '/profile/wallet',
      },
      {
        label: 'Balance',
        img: BalanceIcon,
        path: '/',
      },
      {
        label: 'My Bonuses',
        img: MyBonusesIcon,
        path: '/profile/history-of-bonuses',
      },
      {
        label: 'Game History',
        img: GameHistoryIcon,
        path: '/profile/history-of-games',
      },
      {
        label: 'Localization',
        img: LocalizationIcon,
        path: '/',
      },
    ],
  },
]

export const SideMenu: React.FC = () => {
  const sideMenuRef = useRef(null)
  const sideMenuIsOpen = useAppSelector(state => state.ui.sideMenuIsOpen)
  const dispatch = useAppDispatch()

  useOutsideClick(sideMenuRef, () => dispatch(closeMenu()))

  const handleClose = () => dispatch(closeMenu())

  return (
    <div 
      ref={sideMenuRef}
      className={cx({
        [styles.sideMenu]: true,
        [styles.sideMenuIsOpen]: sideMenuIsOpen
      })}>
      <div className={styles.logo}>
        <img className={styles.logoIcon} src={JackpotLogoIcon} alt="Logo" />
        <p className={styles.logoText}>Jackpot</p>

        <img onClick={handleClose} className={styles.closeIcon} src={CloseIcon} alt="Close" />
      </div>

      <SideMenuDivider classNames={styles.marginedDivider} />

      {sections.map((section, index) => (
        <SideMenuSection
          key={`${section.path}-${index}`}
          {...section}
        />
      ))}

      <div className={styles.languageOptions}>

        <p className={styles.languageTitle}>Language Options</p>

        <button className={styles.liveChatButton}>
          <div className={styles.liveChatIconContainer}>
            <img className={styles.liveChatIcon} src={ChatIcon} alt="Live chat" />
          </div>
          <span className={styles.liveChatText}>Live chat</span>
        </button>
      </div>

      <SideMenuDivider />

      <div className={styles.socialMedia}>
        <img src={DiscordIcon} alt="Discord" />
        <img src={SlackIcon} alt="Slack" />
        <img src={TelegramIcon} alt="Telegram" />
        <img src={WhatsappIcon} alt="WhatsApp" />
        <img src={WeChatIcon} alt="WeChat" />
        <img src={ViberIcon} alt="Viber" />
      </div>
    </div>
  )
}