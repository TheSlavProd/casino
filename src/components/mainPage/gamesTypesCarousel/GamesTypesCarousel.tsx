import React from 'react'
import cx from 'classnames'
import Slider from 'react-slick'

import AllGamesIcon from 'baseComponents/sideMenu/assets/all-games.svg'
import BuyBonusIcon from 'baseComponents/sideMenu/assets/buy-bonus.svg'
import ClassicSlotsIcon from 'baseComponents/sideMenu/assets/classic-slots.svg'
import FavouritesIcon from 'baseComponents/sideMenu/assets/favourites.svg'
import JackpotsIcon from 'baseComponents/sideMenu/assets/jackpots.svg'
import LastPlayedIcon from 'baseComponents/sideMenu/assets/last-played.svg'
import MegawaysIcon from 'baseComponents/sideMenu/assets/megaways.svg'
import NewIcon from 'baseComponents/sideMenu/assets/new.svg'
import TableGamesIcon from 'baseComponents/sideMenu/assets/table-games.svg'
import TopIcon from 'baseComponents/sideMenu/assets/top.svg'

import ArrowIcon from './assets/arrow.svg'

import styles from './GamesTypesCarousel.module.css'

interface IGameType {
  img: string;
  name: string;
  active: boolean;
}

const gamesTypes: IGameType[] = [
  { img: AllGamesIcon, name: 'All Games', active: false },
  { img: JackpotsIcon, name: 'Jackpots', active: false },
  { img: BuyBonusIcon, name: 'Buy Bonus', active: false },
  { img: LastPlayedIcon, name: 'Last Played', active: false },
  { img: ClassicSlotsIcon, name: 'Classic Slots', active: true },
  { img: MegawaysIcon, name: 'Megaways', active: false },
  { img: FavouritesIcon, name: 'Favourites', active: false },
  { img: NewIcon, name: 'New', active: false },
  { img: TableGamesIcon, name: 'Table Games', active: false },
  { img: AllGamesIcon, name: 'All Games', active: false },
  { img: JackpotsIcon, name: 'Jackpots', active: false },
  { img: BuyBonusIcon, name: 'Buy Bonus', active: false },
  { img: TopIcon, name: 'Top', active: false },
]

interface ISlideButtonProps {
  direction: boolean;
  onClick?: any;
}

const SlideButton: React.FC<ISlideButtonProps> = ({ direction, onClick }) => {

  const imageAlt = `${direction ? "Next" : "Prev"} Slide`

  return (
    <button 
      className={cx({
        [styles.slideButton]: true,
        [styles.prevSlideButton]: direction,
      })} 
      onClick={onClick}
    >
      <img src={ArrowIcon} alt={imageAlt} />
    </button>
  )
}

const sliderSettings = {
  slidesToShow: 9,
  infinite: true,
  nextArrow: <SlideButton direction />,
  prevArrow: <SlideButton direction={false} />,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 8,
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 6,
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 3,
      }
    },
  ]
}

export const GamesTypesCarousel: React.FC = () => {
  return (
    <div className={styles.gamesTypesCarousel}>
      <Slider {...sliderSettings} >
        {gamesTypes.map((gameType: IGameType, index: number) => (
          <div 
            className={cx({
              [styles.gameTypeSlide]: true,
              [styles.activeGameTypeSlide]: gameType.active
            })} 
            key={`${gameType.name}-${index}`}
          >
            <img src={gameType.img} alt={gameType.name} />
            <p>{gameType.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}