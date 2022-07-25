import React, {useState} from 'react'

import Tile from './Tile'

const Board = () => {
  // Square dimension of the board
  const boardDimension = 5

  const [activeTiles, setActiveTiles] = useState( () => {
    // start with a 2d array populated with 'true'
    return Array(boardDimension).fill(null).map(() => Array(boardDimension).fill(true))
  })
  const [strikeCounter, setStrikeCounter] = useState( () => {
    return Array(boardDimension).fill(null).map(() => Array(boardDimension).fill(0))
  })

  // Testing board
  const layerOne = Array(boardDimension).fill(null).map(() => Array(boardDimension).fill(1))

  // Tile Movement Functions
  /*********************************************/
  const oneTileMovement = (i, j) => {
    var newTileStatus = Array(boardDimension).fill(null).map(() => Array(boardDimension).fill(false))
    if(j - 1 >= 0) {  // left tile
      newTileStatus[i][j-1] = true
    }
    if(j + 1 < boardDimension) {  // right tile
      newTileStatus[i][j+1] = true
    }
    if(i - 1 >= 0) {  // upper row
      newTileStatus[i-1][j] = true
      if(j - 1 >= 0) {
        newTileStatus[i-1][j-1] = true
      }
      if(j + 1 < boardDimension) {
        newTileStatus[i-1][j+1] = true
      }
    }
    if(i + 1 < boardDimension) {  // lower row
      newTileStatus[i+1][j] = true
      if(j - 1 >= 0) {
        newTileStatus[i+1][j-1] = true
      }
      if(j + 1 < boardDimension) {
        newTileStatus[i+1][j+1] = true
      }
    }
    setActiveTiles(newTileStatus)
  }

  /*********************************************/

  const incrementStrike = (i, j) => {
    const newStrikeCounter = [...strikeCounter]
    newStrikeCounter[i][j]++
    setStrikeCounter(newStrikeCounter)
}

  const tileClick = (type, i, j) => {
    incrementStrike(i, j)
    if(type === 1) {
      oneTileMovement(i, j)
    }
  }

  const tileList = Array(boardDimension).fill(null).map(() => Array(boardDimension).fill(null))
  for(let i = 0, k = 0; i < boardDimension; i++) {
    for(let j = 0; j < boardDimension; j++, k++) {
      tileList[i][j] = <Tile
        key={k}
        type={layerOne[i][j]}
        active={activeTiles[i][j]}
        strikes={strikeCounter[i][j]}
        onClick={() => tileClick(layerOne[i][j], i, j)}
      />
    }
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${boardDimension}, 5rem)`,
    gridTemplateRows: `repeat(${boardDimension}, 5rem)`
  }

  return (
    <div className="grid" style={gridStyle}>
      {tileList}
    </div>
  )
}

export default Board
