const initialState = null

const TotalAmountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TOTAL':
      return Number(state) + Number(action.payload)
    case 'REDUCE_TOTAL':
      return Number(state) - Number(action.payload)
    default:
      return state
  }
}

export default TotalAmountReducer
