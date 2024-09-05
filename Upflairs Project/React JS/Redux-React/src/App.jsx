import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import { store } from './Redux/store'
import { Provider } from 'react-redux'
import Counter from './Counter'

function App() {
  

  return (
    <>
     <Provider store={store}>
      <Counter/>

     </Provider>
    </>
  )
}

export default App