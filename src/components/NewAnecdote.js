import React from 'react'
//import { useDispatch } from 'react-redux'
import {connect} from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification,setNotification } from '../reducers/notificationReducer'
import '../style.css'

const NewAnecdote = (props) => {
  //const dispatch=useDispatch()

  const addAnecdote=async(event)=>{
    event.preventDefault()
    const content=event.target.anecdote.value
    event.target.anecdote.value=''
    props.createAnecdote(content)
    props.setNotification(`new anecdote '${content}'`)
    setTimeout(() =>{
    props.createNotification()},5000)
  }
  return (
    <div className='container'>
        <h2>New Anecdote</h2>
        <form onSubmit={addAnecdote} className="form">
            <input name="anecdote"/>
            <div>
            <button type='submit'>create</button>
            </div>
        </form>
    </div>
  )
}

const mapDispatchToProps ={
  setNotification,
  createNotification,
  createAnecdote
}

const ConectedAnecdote=connect(
  null,
  mapDispatchToProps
)(NewAnecdote)


export default ConectedAnecdote
