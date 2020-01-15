
export const getAllChakras = () => {
  return (dispatch) => {
    fetch(`http://localhost:3000/chakras`, {mode: 'cors'})
      .then(resp => resp.json())
      .then(arrayOfChakras => {
        dispatch(setChakras(arrayOfChakras))
      })
  }
}

export const getAllQuestions = () => {
  return (dispatch) => {
    fetch(`http://localhost:3000/questions`)
    .then(resp => resp.json())
    .then(arrayOfQuestions => {
      dispatch(setQuestions(arrayOfQuestions))
    })
  } 
}

export const updateQuestions = () => {
  return (dispatch) => {

  }
}


export const addUser = (newUser) => {
  return {
      type: "ADD_USER",
      payload: newUser
    }
}
  
export const removeUser = () => {
  return {
    type: "CLEAR_USER"
  }
}

export const setChakras = (arrayOfChakras) => {
  return {
    type: "SET_CHAKRAS",
    payload: arrayOfChakras

  }
}

export const setQuestions = (arrayOfQuestions) => {
  return {
    type: "SET_QUESTIONS",
    payload: arrayOfQuestions
  }
}