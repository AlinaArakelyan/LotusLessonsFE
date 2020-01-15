const initialState = {
    questions: []
  }
  
const questionReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_QUESTIONS":
      return {
        ...state,
        questions: action.payload
      }

      case "UPDATE_QUESTIONS":
        return {
          ...state,
          questions: action.payload
        }

      default:
        return state
    }
  }
  
  export default questionReducer