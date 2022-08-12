import React from 'react'
import cx from 'classnames'
import Slider from 'react-slick'

import { useAppSelector } from 'utils'
import { TransparentSelect } from 'baseComponents'

import RocketImage from './assets/rocket-2.png'
import RocketMobileImage from './assets/rocket-mobile.png'
import JackpotPurpleImage from './assets/jackpot.png'
import JackpotGreenImage from './assets/jackpot-green.png'
import JackpotPurpleMobileImage from './assets/jackpot-purple-mobile.png'
import JackpotGreenMobileImage from './assets/jackpot-green-mobile.png'
import CarretRightIcon from './assets/carret-right.svg'

import styles from './EntryCarousel.module.css'
import './EntryCarousel.css'

const PrevButton: React.FC<any> = ({ onClick }) => {
  return (
    <button 
      className={cx([styles.slideButton, styles.prevButton])} 
      onClick={onClick}
    >
      <img src={CarretRightIcon} alt="Next slide" />
    </button>
  )
}

const NextButton: React.FC<any> = ({ onClick }) => {
  return (
    <button 
      className={cx([styles.slideButton, styles.nextButton])} 
      onClick={onClick}
    >
      <img src={CarretRightIcon} alt="Next slide" />
    </button>
  )
}

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextButton />,
  prevArrow: <PrevButton />,
};

const options = [
  { label: 'USD', value: 'usd' },
  { label: 'EUR', value: 'euro' },
]

export const EntryCarousel: React.FC = () => {
  const activeTheme = useAppSelector((state) => state.ui.activeTheme)
  const JackpotImage = activeTheme === 'PURPLE' ? JackpotPurpleImage : JackpotGreenImage
  const JackpotMobileImage = activeTheme === 'PURPLE' ? JackpotPurpleMobileImage : JackpotGreenMobileImage

  return (
    <div className={styles.entryCarousel}>
      <Slider className="entry-carousel" {...settings}>

          <div className={styles.depositSlideContainer}>
            
            <div>
              <div className={styles.slideTitle}>
                <h3>Enter the deposit amount</h3>
                <img className={styles.rocketMobileImage} src={RocketMobileImage} alt="Rocket" />
              </div>

              <div className={styles.amountAndCurrency}>
                <input placeholder="Deposit amount" />
                
                <TransparentSelect 
                  selectedOptionsClassName={styles.currencySelectedOption} 
                  wrapperClassName={styles.currencySelectWrapper} 
                  className={styles.currencySelect} 
                  optionsClassName={styles.currencySelectOptions}
                  optionClassName={styles.currencySelectOption}
                  options={options} 
                />

              </div>

              <div className={styles.button}>
                <button>Deposit now</button>
                <div className={styles.shadow} />
              </div>
            </div>

            <img className={styles.rocketImage} src={RocketImage} alt="Rocket" />

          </div>

          <div className={styles.depositSlideContainer}>

            <div className={styles.jackpotContainer}>
              <div className={styles.jackpotWrapper}>
                
                <img className={styles.jackpotLogoMobile} src={JackpotMobileImage} alt="Jackpot" />
                
                <h3>Try to get Jackpot <br /> right now</h3>
                
                <div className={styles.jackpotAmountMobile}>
                  <p>842234.13</p>
                </div>

                <div className={styles.button}>
                  <button>More Info</button>
                  <div className={styles.shadow} />
                </div>

              </div>
              
              <div className={styles.jackpotAmountAndLogo}>
                <img src={JackpotImage} alt="Jackpot" />
                <div className={styles.jackpotAmount}>
                  <p>842234.13</p>
                </div>
              </div>
            </div>


          </div>

      </Slider>
    </div>
  )
}