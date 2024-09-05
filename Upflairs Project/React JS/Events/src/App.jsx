import { useState } from 'react'

function App() {
  function showMsg() {
    alert(`Button clicked`)
    console.log('Button Clicked')
  }

  function btn() {
    alert('This btn clicked')
  }

  return(
    <>
    <button onClick={showMsg}>ShowMsg</button>
    <button onClick={btn}>btn</button>
    </>
  )
}

export default App
