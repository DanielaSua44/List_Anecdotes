import React from "react";
//import { useDispatch, useSelector } from "react-redux";
import {connect} from 'react-redux'
import { votesAcum } from "../reducers/anecdoteReducer";
import { createNotification ,setNotification} from "../reducers/notificationReducer";
import "../style.css";

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div>
      <li>
        <h4>{anecdote.content}</h4>
        <strong>has {anecdote.votes}</strong>
        <div>
          <button onClick={handleClick}>votes</button>
        </div>
      </li>
    </div>
  );
};

const Anecdotes = (props) => {
  /*const dispatch = useDispatch();
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    console.log(filter);
    if (filter.length === 0) {
      return anecdotes;
    } else {
      return anecdotes.filter((el) =>
        el.content.toLowerCase().includes(filter.toLowerCase())
      );
    }
  });*/

  const handleClick = (id) => {
    const anecdote = props.anecdotes.find((el) => el.id === id);
    console.log(anecdote)
    props.votesAcum(anecdote.id)
    props.setNotification(`You vote '${anecdote.content}'`)
    setTimeout(() => {
      props.createNotification()
    }, 5000)
  }

  return (
    <ul>
      {props.anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((el) => {
          return (
            <Anecdote
              key={el.id}
              anecdote={el}
              handleClick={() => handleClick(el.id)}
            />
          );
        })}
    </ul>
  );
};

const mapStateToProps=(state)=>{
  if (state.filter.length === 0) {
    return{
      anecdotes:state.anecdotes
    }
  }
  return {  anecdotes:state.anecdotes.filter( el => 
        el.content.toLowerCase().includes(state.filter.toLowerCase()))
  }
  
}

const mapDispatchToProps={
  votesAcum,
  createNotification,
  setNotification
}

const ConectedAnecdotes=connect(
  mapStateToProps,
  mapDispatchToProps
  )(Anecdotes)

export default ConectedAnecdotes
