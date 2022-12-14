/*const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]*/

import anecdoteService from '../services/anecdotes'


const reducer = (state = [], action) => {
  switch(action.type){
   case 'NEW_ANECDOTE':
    return [...state,action.data]
   case 'VOTE' :{
    const id=action.data.id
    const anecdoteToChange=state.find(e => e.id === id)
    const changeAnecdote={
      ...anecdoteToChange,
      votes:anecdoteToChange.votes + 1
    }
    return state.map(anedote => anedote.id === id ? changeAnecdote:anedote)
   }
    case 'INIT_ANECDOTES':
      return action.data
   default :
     return state

  }
}

export const votesAcum=(id)=>{
  return{
    type:'VOTE',
    data:{id}
  }
}

export const createAnecdote=(anecdote)=>{
   return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(anecdote)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}

export const initializeAnecdotes = () => {
   return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data:anecdotes ,
    })
  }
}



export default reducer