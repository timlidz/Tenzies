function Die(props){

   const classList = props.isHeld ? 'numberBtn isHeld' : 'numberBtn'


   return (
      <>
         <button onClick={() => props.hold(props.id)} className={classList}>{props.value}</button>
      </>
   )


}

export default Die