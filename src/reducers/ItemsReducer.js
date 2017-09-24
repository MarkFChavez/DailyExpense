const initialState = []

const ItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      const { date, name, amount } = action.payload

      if (state.find(obj => obj.title === date) !== undefined) {
        // if key is found
        return state.map((item, index) => {
          if (item.title === date) {
            return { title: date, data: item.data.concat({ name, amount }) }
          }

          return item
        })
      }

      // if key is not found, add a new entry to state
      return state.concat({
        title: date,
        data: [{ name, amount }]
      })
    default:
      return state
  }
}

export default ItemsReducer
