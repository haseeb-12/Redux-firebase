import React from 'react'
import { useSelector } from 'react-redux'
import Display from './Display'
import './App.css'
import TodoRender from'./TodoRender'



function App() {

  const toDoList = useSelector((state) => state.todos.toDoList)
  console.log(toDoList)

  return (
    
    <div className='app'>
      <div className='app-container'>
        <div className='app-todoContainer'>
          {
            toDoList.map(list=>{
              return <TodoRender key={list.id} list={list}/>
            })
          }

        </div>
        <Display />
      </div>
    </div>
  )
}

export default App