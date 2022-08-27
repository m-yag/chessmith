# Chessmith

Chessmith is a puzzle game (based on *Puzzle Pirates*' [blacksmithing](https://yppedia.puzzlepirates.com/Blacksmithing) puzzle) 
packaged as a React component. It is a tile-based puzzle which involves chess-like mechanics.

## Installation

```bash
npm install chessmith
```

## Usage

```javascript
import React from 'react'
import Chessmith from 'chessmith'

const App = () => {
  return (
    <div>
      <Chessmith />
    </div>
  )
}
```

## To-do List

* ~~Add numeric tiles.~~
* ~~Add chess tiles.~~
* ~~Add wildcard tile.~~
* Refine styling.
* Improve component useability/customizability.

## How to Play

<p align="center">
  <img width=400 src="https://github.com/m-yag/chessmith/blob/media/board.png?raw=true">
</p>

### Objective

The objective of the puzzle is to clear the board by clicking each square three times. When a square is clicked three times, it 
is considered "complete" and may no longer be used. The puzzle is over when all squares have been 'completed' **or** when no 
move is available.

### Gameplay

Starting with a board of 36 grey squares, each square may be clicked a total of three times over the course of the game:
* On the first click, the square turns from grey to green.
* On the second, from green to orange.
* On the third, the square is 'complete' and there is nothing to click.

<div align="center">
  <img width=300 src="https://github.com/m-yag/chessmith/blob/media/tile-colors.png?raw=true">
  <p>grey → green → orange → complete</p>
</div>

The initial move may be made by clicking on any square. Afterward, the only squares that may be clicked are determined by the 
symbol on the square last clicked. Each time a square is clicked, it is replaced by a new square with a random symbol.

### Pieces

There are two sets of pieces: numeric (1, 2, 3, 4) and chess pieces (Knight, Bishop, Rook, and Queen). They indicate what squares 
may be clicked next. If a destination square is already 'completed' or is beyond the puzzle's border, then a move to that 
particular destination cannot be made. Destination squares, if available, are highlighted.

#### •  Numeric Pieces

A number on a square signifies the distance between the original square and the destination square. Clicking on a 2, for 
instance, allows the player to click any available square that is exactly 2 squares away horizontally, vertically, or 
diagonally; the next click may not occur on a square in between.
<div align="center">
<img width="250" src="https://github.com/m-yag/chessmith/blob/media/two-example.png?raw=true">
</div>

#### • Chess Pieces
The chess pieces have the same movements as they do in chess: The Bishop moves diagonally; the Rook moves vertically or 
horizontally; the Knight moves in an "L" shape (2 x 1 squares or 1 x 2 squares); and the Queen moves diagonally, vertically, or 
horizontally. The difference here as opposed to chess is that, with the exception of the Knight, the pieces always move to the 
border and cannot stop on any one of the squares in between. The next click also may not fall on the same square as the previous 
click. For example, after clicking a rook on the right edge of the board it is not permissible to click the same square again.
<div align="center">
<img width="250" src="https://github.com/m-yag/chessmith/blob/media/rook-example.png?raw=true">
</div>


#### • Wild Card

The fleur-de-lis (⚜) is a wild card tile which allows any square not yet completed, except the same square itself, to be 
clicked. The wild card appears when all squares of a color have been flipped. The last square of a particular color to be 
flipped will contain the fleur-de-lis.

<div align="center">
  <img width=75 src="https://github.com/m-yag/chessmith/blob/media/wildcard.png?raw=true">
  <p>wild card</p>
</div>

## License
This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/)
