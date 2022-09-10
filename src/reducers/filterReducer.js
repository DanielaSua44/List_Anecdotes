
const filterReducer=(state=[], action)=>{
    switch(action.type){
        case 'FILTER':
            return action.filter
        default:
            return state
    }
}

export const filteres = (content) => {
    return{
        type:'FILTER',
        filter:content
    }
}

export default filterReducer