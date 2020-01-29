const initialState = {
    advice: []
}

const adviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ADVICE":
            return {
                ...state,
                advice: action.payload
            }
        case "UPDATE_ADVICE":
            return {
                ...state,
                advice: action.payload
            }
        
        default:
            return state
    }
}

export default adviceReducer;