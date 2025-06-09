import Die from './Die.jsx'
import {useState} from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {

  let [newDice, setNewDice] = useState(() => generateAllNewDice())
  let [clicks, setClicks] = useState(0)
  // useState(() => generateAllNewDice()) will not rerun the function every time state changes

    const gameWon = newDice.every(val => val.isHeld) && newDice.every(die => die.value === newDice[0].value)


  function generateAllNewDice() {
    let arr = []
    for (let i = 0; i<10; i++){
      let num = Math.ceil(Math.random()*6);
      arr.push({value: 5, isHeld: false, id: nanoid()})
    }
    return arr;
  }

  
  function hold(id) {
    setNewDice(prev => prev.map((el) => el.id === id ? {...el,isHeld : !el.isHeld} : el))
  }

  function rollDice() {
    if (gameWon) {
      setNewDice(generateAllNewDice())
      setClicks(0)
    } else {
      setClicks(prev => prev+1)
      setNewDice(prev => prev.map((el) => el.isHeld === false ? 
                                  {...el, value:`${Math.ceil(Math.random()*6)}`} : el))
    }
  }


  return (
    <main>
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
                {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <section className='numbers'>
        {newDice.map(el => <Die value={el.value} key={el.id} isHeld={el.isHeld} hold={hold} id={el.id}/> )}
      </section>

      <button onClick={rollDice} className='rollBtn'>{gameWon ? "New Game" : "Roll"}</button>
      <div className='counter'>
          <p>Time elapsed: <span>00:20</span></p>
          <p>Number of clicks: <span>{clicks}</span></p>
      </div>
    </main>
  )
}

export default App
