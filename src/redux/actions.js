
export const getAllChakras = () => {
  return (dispatch) => {
    fetch(`https://serene-crag-79895.herokuapp.com/chakras`, {mode: 'cors'})
      .then(resp => resp.json())
      .then(arrayOfChakras => {
        dispatch(setChakras(arrayOfChakras))
      })
  }
}

export const getSingleChakra = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/chakras/${id}`)
      .then(resp => resp.json())
      .then(singleChakra => {
        dispatch(setChakra(singleChakra))
      })
  }
}

export const getAllQuestions = () => {
  return (dispatch) => {
    fetch(`https://serene-crag-79895.herokuapp.com/questions`)
    .then(resp => resp.json())
    .then(arrayOfQuestions => {
      dispatch(setQuestions(arrayOfQuestions))
    })
  } 
}

export const getAllPoses = () => {
  return (dispatch) => {
    fetch(`https://serene-crag-79895.herokuapp.com/poses`)
    .then(resp => resp.json())
    .then(arrayOfPoses => {
      dispatch(setPoses(arrayOfPoses))
    })
  } 
}

export const getAllAdvice = () => {
  return (dispatch) => {
    fetch(`https://serene-crag-79895.herokuapp.com/advices`)
      .then(resp => resp.json())
      .then(arrayOfAdvice => {
        dispatch(setAdvice(arrayOfAdvice))
      })
  }
}

export const addUserBE = (name) => {
  console.log("from addUserBE", name)
  return (dispatch) => {
    fetch('https://serene-crag-79895.herokuapp.com/users',{
           method:'POST',
           headers: { 
               'Content-type': 'application/json',
               'accept': 'application/json'
           },
          body: JSON.stringify({
              name: name
            })
    })
      .then(resp => resp.json())
      .then(user => {
      dispatch(addUser(user))
    })
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

export const setPoses = (arrayOfPoses) => {
  return {
    type: "SET_POSES",
    payload: arrayOfPoses
  }
}

export const setChakra = (singleChakra) => {
  return {
    type: "SET_CHAKRA",
    payload: singleChakra

  }
}

export const setQuestions = (arrayOfQuestions) => {
  return {
    type: "SET_QUESTIONS",
    payload: arrayOfQuestions
  }
}

export const setAdvice = (arrayOfAdvice) => {
  return {
    type: "SET_ADVICE",
    payload: arrayOfAdvice
  }
}