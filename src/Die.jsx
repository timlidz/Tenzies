function Die(props){

   const classList = props.isHeld ? 'numberBtn isHeld' : 'numberBtn'

   return (
      <>
         <button className={classList}>{props.value}</button>
      </>
   )


}

export default Die