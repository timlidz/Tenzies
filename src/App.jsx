import Die from './Die.jsx'
import {useState} from 'react'
import { nanoid } from 'nanoid'

function App() {

  let [newDice, setNewDice] = useState(generateAllNewDice())

  function generateAllNewDice() {
    let arr = []
    for (let i = 0; i<10; i++){
      let num = Math.ceil(Math.random()*6);
      arr.push({value: num, isHeld: false, id: nanoid()})
    }
    return arr;
  }
  

  return (
    <main>
      <section className='numbers'>
        {newDice.map(el => <Die value={el.value} key={el.id}/> )}
      </section>

      <button onClick={() => setNewDice(generateAllNewDice())} className='rollBtn'>Roll</button>
    </main>
  )
}

export default App
