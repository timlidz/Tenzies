function Die(props){

   const classList = props.isHeld ? 'numberBtn isHeld' : 'numberBtn'


   return (
      <>
         <button onClick={() => props.hold(props.id)} className={classList}
         aria-pressed={props.isHeld}
         aria-label={`Die with value ${props.value}, 
         ${props.isHeld ? "held" : "not held"}`}
         >{props.value}</button>
      </>
   )


}

export default Die