import React,{useEffect} from "react"
import { useDispatch } from "react-redux"
import Anecdotes from "./components/Anecdotes"
import Filter from "./components/Filter"
import NewAnecdote from './components/NewAnecdote'
import Notification from "./components/Notification"
import { initializeAnecdotes } from "./reducers/anecdoteReducer"
import './style.css'


const App = () => {
   const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])
 
  return (
    <div className="container">
      <h2>Anecdotes</h2>
      <Notification/>
      <Filter/>
      <Anecdotes/>
      <NewAnecdote/>
    </div>
  )
}

export default App