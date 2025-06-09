
function Die(props){

   const classList = props.isHeld ? 'numberBtn isHeld' : 'numberBtn'


   return (
      <>
         <button onClick={() => props.hold(props.id)} className={classList} id={'pip-'+ props.value}
         aria-pressed={props.isHeld}
         aria-label={`Die with value ${props.value}, 
         ${props.isHeld ? "held" : "not held"}`}
         ></button>
      </>
   )


}

export default Die