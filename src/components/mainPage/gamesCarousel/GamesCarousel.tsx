import React, { useState } from 'react'
import cx from 'classnames'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import ShowAllIcon from './assets/show-all.svg'
import CarretIcon from './assets/carret.svg'

import styles from './GamesCarousel.module.css'

export const GamesCarousel: React.FC<IGamesCarousel> = ({ icon, title, games }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(1)

  // const breakpoints = [
  //   window.matchMedia('(max-width: 1500px)'),
  //   window.matchMedia('(max-width:769px)')

  // ] 
  
  // let mySwiper;

  // const breakpointChecker = function() {
  //   if ( breakpoints[0].matches || breakpoints[1].matches) {        
  //       if (mySwiper !== undefined) mySwiper.destroy(true, true)
  //       return;
  //   } else if ( breakpoint.matches === false ) {
  //       return enableSwiper()
  //   }
  // };

  return (
    <div className={styles.gamesCarousel}>

      <div className={styles.carouselInfo}>
        <img className={styles.carouselIcon} src={icon} alt="Icon" />
        <p className={styles.carouselTitle}>{title}</p>
      </div>

      <Swiper
        resizeObserver
        className={styles.carousel}
        // spaceBetween={18}
        slidesPerView={6}
        breakpoints={{
          1: {
            slidesPerView: 1,
          },
          660: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
          1480: {
            slidesPerView: 4,
          },
          1800: {
            slidesPerView: 5,
          },
          2100: {
            slidesPerView: 6,
          },
          2350: {
            slidesPerView: 7,
          },
          2600: {
            slidesPerView: 8,
          }
        }}
        loop
      >          
        <div className={styles.carouselHeader}>

          <div className={styles.carouselControls}>
            <button className={styles.showAllButton}>
              <img src={ShowAllIcon} alt="Show All" />
              <span>Show All</span>
            </button>

            <SlideControls currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} amount={games.length} />
          </div>
        </div>

        {games.map((game: ISectionGame, index: number) => (
          <SwiperSlide key={`${game.title}-${index}`}>
            <div className={styles.gameSlide}>
              
              <div className={styles.gameImage}>
                <img src={game.image} alt={game.title} />

                <div className={styles.gameControls}>
                  <button className={styles.addToFavourite}>Favourite</button>
                  <div className={styles.playButtons}>
                    <button>Demo</button>
                    <button>Real</button>
                  </div>
                </div>

              </div>

              <p className={styles.gameTitle}>{game.title}</p>
              
            </div>
          </SwiperSlide>
        ))}
      
      </Swiper>
    </div>
  )
}

interface ISlideControlsProps {
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  amount: number;
}

const SlideControls: React.FC<ISlideControlsProps> = ({ currentSlide, setCurrentSlide, amount }) => {
  const swiper = useSwiper()

  const prevSlide = () => {
    swiper.slidePrev()
    const prevSlide = currentSlide - 1

    if (prevSlide === 0) {
      setCurrentSlide(amount)
    } else {
      setCurrentSlide(prevSlide)
    }
  }

  const nextSlide = () => {
    swiper.slideNext()
    const nextSlide = currentSlide + 1

    if (nextSlide > amount) {
      setCurrentSlide(1)
    } else {
      setCurrentSlide(nextSlide)
    }
  } 

  const prevSectionSlide = () => {
    const prevSection = currentSlide - 6
    
    if (prevSection < 1) {
      const newSlide = amount + prevSection
      swiper.slideTo(newSlide)
      setCurrentSlide(newSlide)
    } else {
      swiper.slideTo(prevSection)
      setCurrentSlide(prevSection)
    }
  }

  const nextSectionSlide = () => {
    const nextSection = currentSlide + 6
    if (nextSection > amount) {
      const newSlide = nextSection - amount
      swiper.slideTo(newSlide)
      setCurrentSlide(newSlide)      
    } else {
      swiper.slideTo(nextSection)
      setCurrentSlide(nextSection)
    }
  } 

  return (
    <div className={styles.slideControls}>

        <button onClick={prevSectionSlide} className={cx([styles.slideButton, styles.prevButton])}>
        <img src={CarretIcon} alt="Previous Slide" />
        <img src={CarretIcon} alt="Previous Slide" />
        </button>

        <button onClick={prevSlide} className={cx([styles.slideButton, styles.prevButton])}>
        <img src={CarretIcon} alt="Previous Slide" />
        </button>

        <button onClick={nextSlide} className={cx([styles.slideButton, styles.nextButton])}>
        <img src={CarretIcon} alt="Next Slide" />
        </button>

        <button onClick={nextSectionSlide} className={cx([styles.slideButton, styles.nextButton])}>
        <img src={CarretIcon} alt="Next Slide" />
        <img src={CarretIcon} alt="Next Slide" />
        </button>

    </div>
  )
}