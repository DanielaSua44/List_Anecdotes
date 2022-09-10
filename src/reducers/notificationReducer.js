

const notificationReducer=(state=[],action)=>{
    switch(action.type){
        case 'NOTIFICATION':
          return state
        case 'SET_NOTIFICATION':
          return state=action.message
        default:
          return state
    }
}

export const createNotification=() =>{
    return{
        type:'NOTIFICATION',
         
    }
}

export const  setNotification = (message) =>{
  return{
    type:'SET_NOTIFICATION',
    message,
  }
}



export default notificationReducer