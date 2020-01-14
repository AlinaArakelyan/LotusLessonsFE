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
