import Die from './Die.jsx'
import {useState} from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {

  let [newDice, setNewDice] = useState(() => generateAllNewDice())
  // useState(() => generateAllNewDice()) will not rerun the function every time state changes

  let gameWon = false
  
    if (
    newDice.map(el => el.isHeld).reduce((end, curr) => end && curr, true) && 
    newDice.every(die => die.value === newDice[0].value)
      ) {
        console.log("Game Won")
        gameWon = true
      }

  function generateAllNewDice() {
    let arr = []
    for (let i = 0; i<10; i++){
      let num = Math.ceil(Math.random()*6);
      arr.push({value: num, isHeld: false, id: nanoid()})
    }
    return arr;
  }

  
  function hold(id) {
    setNewDice(prev => prev.map((el) => el.id === id ? {...el,isHeld : !el.isHeld} : el))
  }

  function rollDice() {
    if (gameWon) {
      gameWon = false
      setNewDice(generateAllNewDice())
    } 
      setNewDice(prev => prev.map((el) => el.isHeld === false ? 
                                  {...el, value:`${Math.ceil(Math.random()*6)}`} : el))

  }


  return (
    <main>
      {gameWon && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <section className='numbers'>
        {newDice.map(el => <Die value={el.value} key={el.id} isHeld={el.isHeld} hold={hold} id={el.id}/> )}
      </section>

      <button onClick={rollDice} className='rollBtn'>{gameWon ? "New Game" : "Roll"}</button>
    </main>
  )
}

export default App
