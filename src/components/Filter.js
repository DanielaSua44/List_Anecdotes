import React from 'react'
import { useDispatch } from 'react-redux'
import { filteres } from '../reducers/filterReducer'

const Filter=()=>{
    const dispatch=useDispatch()
    const handleChange=(e)=>{
      e.preventDefault()
      const content=e.target.value
      dispatch(filteres(content))
    }
    return(
        <div className='form'>
            <h2>Filter:</h2><input onChange={handleChange}/>
        </div>
    )
}

export default Filter