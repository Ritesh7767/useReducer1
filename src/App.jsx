import { useReducer, useState } from 'react'

const reducer = (state, action) => {

  switch(action.type){
    case "sub" : return {count : state.count - 1}
    case 'add' : return {count : state.count + 1}
  }

}

const changeTheme = theme => {
  return !theme
}

function App() {

  let [state , dispatch] = useReducer(reducer, {count : 0})
  let [theme, ChangeTheme] = useReducer(changeTheme, false)

  console.log("this is app function")
  return (
    <>
      {theme ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "white"}
      <br />
      <button onClick={() => dispatch({type : "sub"})}>Decrement</button>
      <h1 style={{color : theme ? "white" : "black"}}>Counter :- {state.count}</h1>
      <button onClick={() => dispatch({type : "add"})}>Increment</button><br /><br />
      <button onClick={ChangeTheme}>Change theme</button>
    </>
  )
}

export default App
