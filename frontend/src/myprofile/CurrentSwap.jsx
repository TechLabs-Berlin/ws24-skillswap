import React from "react";
import { useState } from 'react';


const CurrentSwap = () => {
  

  const [completed, setCompleted] = useState(false);
  
  const handleToggle = () => {
    setCompleted(!completed);
  }
  

  return(
    <section className="currentSwap">
    <h3>Current Swap</h3>

    <p>Piano with Bjorn</p>
    <div className={'completed-toggle'}>
      <p>{completed ? 'completed ' : 'incomplete' }</p>
      <div className={'toggle-wrapper'}>
        <input type="checkbox" checked={completed} id={'toggle-button'} onChange={handleToggle}/>
      </div>
    </div>

   
  </section>
  )
}

export default CurrentSwap;


