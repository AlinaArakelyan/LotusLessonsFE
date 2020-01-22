const initialState = {
    poses: []
  }
  
const poseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POSES":
      return {
        ...state,
        poses: action.payload
      }
    
      
      default:
        return state
    }
  }
  
export default poseReducer;