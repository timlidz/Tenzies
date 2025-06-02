import Die from './Die.jsx'

function App() {

  function generateAllNewDice() {
    let arr = []
    for (let i = 0; i<6; i++){
      let num = Math.floor(Math.random()*10)+1;
      arr.push(num)
    }
    return arr;
  }

  console.log(generateAllNewDice())

  return (
    <main>
      <section className='numbers'>
        <Die value={1}/>
        <Die value={2}/>
        <Die value={3}/>
        <Die value={4}/>
        <Die value={5}/>
        <Die value={6}/>
        <Die value={7}/>
        <Die value={8}/>
        <Die value={9}/>
        <Die value={10}/>
      </section>
    </main>
  )
}

export default App
