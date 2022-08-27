import React from 'react'
import {useState} from 'react'
import {CSSTransition} from 'react-transition-group'
import Piece from './Piece'

const Tile = ({type, active, strikes, onClick}) => {

  const [complete, setComplete] = useState(false)

  return (
    <div className="tileContainer">
      <button className='tileButton' onClick={onClick} disabled={complete ? true : !active}>

        <CSSTransition in={strikes === 3} timeout={500} classNames="first-transition" unmountOnExit>
          <div className="tile tileComplete">
          </div>
        </CSSTransition>

        <CSSTransition in={strikes === 2} timeout={500} classNames="first-transition" onExit={() => setComplete(true)} unmountOnExit>
          <div className={`${active ? 'clickable tileThreeFilter' : 'unclickable'} tile tileThree`}>
            <Piece type={type}/>
          </div>
        </CSSTransition>

        <CSSTransition in={strikes === 1} timeout={500} classNames="first-transition" unmountOnExit>
          <div className={`${active ? 'clickable tileTwoFilter' : 'unclickable'} tile tileTwo`}>
            <Piece type={type}/>
          </div>
        </CSSTransition>

        <CSSTransition in={strikes === 0} timeout={500} classNames="first-transition" unmountOnExit>
          <div className={`${active ? 'clickable' : 'unclickable'} tile tileOne`}>
            <Piece type={type}/>
          </div>
        </CSSTransition>

      </button>
    </div>
  )
}

export default Tile
