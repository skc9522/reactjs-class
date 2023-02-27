import React, { useState } from 'react'
import './App.css';

function App() {

  const [state, setState] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    console.log('e.value', e.target.value)
    setState(e.target.value)
  }


  return (
    <div>
      {/* <button value={state} onClick={(value) => handleClick(value)}>HELLO BUTTON</button>  */}
      <input value={state} placeholder='enter username' onChange={handleChange} />

    </div>



  );
}

export default App;
