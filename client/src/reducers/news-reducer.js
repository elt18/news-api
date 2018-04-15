const initialState = []

export default (state = initialState, action) => {
  if (action.type === 'News') {
    return action.payload
  }
  else {
    return initialState
  }
}
