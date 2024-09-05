import { useState } from 'react'

export function Counter() {
  const [num, setState]= useState(0)

  function minusTen(params) {
    setState(num-10)
  }

  function minusOne() {
    setState(num-1)
  }

  function plusOne() {
    setState(num+1)
  }

  function plusTen() {
    setState(num+10)
  }
  return(
    <>
    <button onClick={minusTen}>-10</button>
    <button onClick={minusOne}>-1</button>
    <button style={{margin:'10px'}}>{num}</button>
    <button onClick={plusOne}>+1</button>
    <button onClick={plusTen}>+10</button>
    </>
  )
}