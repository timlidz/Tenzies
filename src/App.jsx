import Die from './Die.jsx'
import {useState} from 'react'

function App() {

  let [newDice, setNewDice] = useState(generateAllNewDice())

  function generateAllNewDice() {
    let arr = []
    for (let i = 0; i<10; i++){
      let num = Math.ceil(Math.random()*6);
      arr.push(num)
    }
    return arr;
  }


  return (
    <main>
      <section className='numbers'>
        {newDice.map(el => <Die value={el}/> )}
      </section>

      <button onClick={() => setNewDice(generateAllNewDice())} className='rollBtn'>Roll</button>
    </main>
  )
}

export default App
