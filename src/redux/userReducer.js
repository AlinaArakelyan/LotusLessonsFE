const initialState = {
    user: []
  }
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_USER":
        return {
          ...state,
          user: action.payload
        }
      case "CLEAR_USER":
        return {
          ...state,
          user: []
        }
      case "UPDATE_USER":
        return {
          user: "this will update the user"
        }

      default:
        return state
    }
  }
  
  export default userReducer