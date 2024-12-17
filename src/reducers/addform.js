const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_FORM':
        return [
          ...state,
          {
            id: action.id,
            title: action.title,
          }
        ]
      
      default:
        return state
    }
  }
  
  export default todos
  