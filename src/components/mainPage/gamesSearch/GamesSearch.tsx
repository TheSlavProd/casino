import React, { useState, useEffect, useRef } from 'react'
import cx from 'classnames'
import { useOutsideClick } from 'utils'

import { Dropdown, Search } from 'baseComponents'
import { GamesSearchItems, GamesSearchLabel } from 'components/mainPage'

import ShowAllIcon from './assets/show-all.svg'
import GameImage from './assets/game.png'

import styles from './GamesSearch.module.css'

const collectionsDropdown = {
  category: 'All',
  options: [
    { value: 'Collections', label: 'collections' },
    { value: 'Collections', label: 'collections' },
    { value: 'Collections', label: 'collections' },
    { value: 'Collections', label: 'collections' },
  ]
}

const gamesDropdown = {
  category: 'Aristocrat',
  options: [
    { value: 'novomatic', label: 'Novomatic' },
    { value: 'novomatic', label: 'Novomatic' },
    { value: 'novomatic', label: 'Novomatic' },
    { value: 'novomatic', label: 'Novomatic' },
    { value: 'novomatic', label: 'Novomatic' },
    { value: 'novomatic', label: 'Novomatic' },
    { value: 'novomatic', label: 'Novomatic' },
    { value: 'novomatic', label: 'Novomatic' },
  ]
}

const linesDropdown = {
  category: 'All',
  options: [
    { value: 'lines', label: 'Lines' },
    { value: 'lines', label: 'Lines' },
    { value: 'lines', label: 'Lines' },
    { value: 'lines', label: 'Lines' },
    { value: 'lines', label: 'Lines' },
  ]
}

const searchResults: IGamesSearchItem[] = [
  { 
    img: GameImage, 
    category: 'Egyptian', 
    rtp: '89.4%', 
    style: 'Original Classic', 
    provider: 'Pragmatic Play Novomatic' 
  },
  { 
    img: GameImage, 
    category: 'Egyptian', 
    rtp: '89.4%', 
    style: 'Original Classic', 
    provider: 'Pragmatic Play Novomatic' 
  },
  { 
    img: GameImage, 
    category: 'Egyptian', 
    rtp: '89.4%', 
    style: 'Original Classic', 
    provider: 'Pragmatic Play Novomatic' 
  },
  { 
    img: GameImage, 
    category: 'Egyptian', 
    rtp: '89.4%', 
    style: 'Original Classic', 
    provider: 'Pragmatic Play Novomatic' 
  },
  { 
    img: GameImage, 
    category: 'Egyptian', 
    rtp: '89.4%', 
    style: 'Original Classic', 
    provider: 'Pragmatic Play Novomatic' 
  },
  { 
    img: GameImage, 
    category: 'Egyptian', 
    rtp: '89.4%', 
    style: 'Original Classic', 
    provider: 'Pragmatic Play Novomatic' 
  },
  { 
    img: GameImage, 
    category: 'Egyptian', 
    rtp: '89.4%', 
    style: 'Original Classic', 
    provider: 'Pragmatic Play Novomatic' 
  },
  { 
    img: GameImage, 
    category: 'Egyptian', 
    rtp: '89.4%', 
    style: 'Original Classic', 
    provider: 'Pragmatic Play Novomatic' 
  },
]

export const GamesSearch: React.FC = () => {
  const gamesSearchRef = useRef(null)

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [query, setQuery] = useState<string>('')
  const [collection, setCollection] = useState<IOption | null>(null)
  const [game, setGame] = useState<IOption | null>(null)
  const [line, setLine] = useState<IOption | null>(null)
  const [labels, setLabels] = useState<React.ReactNode[]>([])

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleCollectionChange = (option: IOption) => setCollection(option)
  const handleGameChange = (option: IOption) => setGame(option)
  const handleLineChange = (option: IOption) => setLine(option)

  const resetCollections = () => setCollection(null)
  const resetGame = () => setGame(null)
  const resetLine = () => setLine(null)
  const resetQuery = () => setQuery('')
  const resetLabels = () => {
    resetCollections()
    resetGame()
    resetLine()
    resetQuery()
  } 

  const formLabels = () => {
    const labelsArray = []

    if (query) {
      labelsArray.push(<GamesSearchLabel text={query} onClose={resetQuery} />)
    }

    if (collection) {
      labelsArray.push(<GamesSearchLabel text={collection.label} onClose={resetCollections} />)
    }

    if (game) {
      labelsArray.push(<GamesSearchLabel text={game.label} onClose={resetGame} />)
    }

    if (line) {
      labelsArray.push(<GamesSearchLabel text={line.label} onClose={resetLine} />)
    }

    if (labelsArray.length > 1) {
      labelsArray.push(<GamesSearchLabel text="Clear All" withIcon={false} onClose={resetLabels} />)
    }

    setLabels(labelsArray)
  }

  useEffect(() => {
    if (!isOpen && (query.length || collection !== null || game !== null || line !== null)) {
      setIsOpen(true)
    } else {
      formLabels()
    }
  }, [query, collection, game, line])

  const handleCloseSearch = () => {
    if (isOpen) {
      setQuery('')
      setCollection(null)
      setGame(null)
      setLine(null)
      setIsOpen(false)
    }
  }

  useOutsideClick(gamesSearchRef, handleCloseSearch)

  return (
    <div ref={gamesSearchRef} className={styles.gamesSearch}>

      <div className={styles.searchRow}>
        <Search 
          value={query} 
          onChange={handleQueryChange} 
          classnames={styles.searchBar} 
        />
        <div className={styles.dropdowns}>
          <Dropdown 
            option={collection} 
            onChange={handleCollectionChange} 
            classname={styles.dropdown} 
            {...collectionsDropdown} 
          />
          
          <Dropdown 
            option={game} 
            onChange={handleGameChange} 
            classname={styles.dropdown} 
            {...gamesDropdown} 
          />
          
          <Dropdown 
            option={line} 
            onChange={handleLineChange}
            classname={styles.dropdown} 
            {...linesDropdown} 
          />
        </div>
      </div>

      <div 
        className={cx({
          [styles.searchContent]: true,
          [styles.searchContentOpen]: isOpen,
        })}
      >
        {
          labels.length > 0 && (
            <div className={styles.labels}>
              {labels.map((label) => label)}
            </div>
          )
        }

        <GamesSearchItems items={searchResults} />
        
        <div className={styles.showAll}>
          <button>
            <img src={ShowAllIcon} alt="Show more" />
            <p>Show All <span>(45)</span></p>
          </button>
        </div>

      </div>

    </div>
  )
}