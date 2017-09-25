const initialState = null

const TotalAmountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TOTAL':
      return Number(state) + Number(action.payload)
    case 'REDUCE_TOTAL':
      const newTotal = Number(state) - Number(action.payload)
      if (newTotal === 0) return null
      return newTotal
    default:
      return state
  }
}

export default TotalAmountReducer
