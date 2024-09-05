import { useReducer, useState } from 'react'
let initiatState = [{ id: 1, task: 'wake up at 7', isComplete: false }]

let reducer = (state, action) => {
  let newTodo = [...state]
  if (action.type == 'add') {
    {
      state.length > 0 ?
      newTodo.push({
        {
          id: state, [state.length - 1].id + 1,
            task: action.payload,
            isComplete:false
        }
      }):
      newTodo.push({
        id: 1, task:action.payload,
        isComplete:false
      })
    }
    return newTodo
  }
  else if
}


function App() {
  const [todo, dispatch] = useReducer(reducer, initiatState)
  const [text, setText] = useState('')
  return (

    <>
      <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
      <button onClick={() => { dispatch({ type: 'add', payload: text }); setText('') }}>Add</button><br />
      {todo.map((v, i) => {
        return <li>{v.task}
          <button>Delete</button>
          <button>C</button>
        </li>
      })}
    </>
  )
}

export default App
