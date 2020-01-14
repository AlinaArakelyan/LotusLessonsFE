const initialState = {
    user: []
  }
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_USER":
        console.log(state)
        return {
          ...state,
          user: action.payload.user
        }
      case "CLEAR_USER":
        console.log(state)
        return {
          ...state,
          user: []
        }

      default:
        return state
    }
  }
  
  export default userReducer