import { generateGUID, sameDay } from '../helpers'

const initialState = []

const ItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      const { date, name, amount } = action.payload

      const uuid = generateGUID()

      if (state.find(obj => sameDay(new Date(obj.title), date)) !== undefined) {
        // if key is found
        return state.map((item, index) => {
          if (sameDay(new Date(item.title), date)) {
            return {
              title: date,
              data: item.data.concat({ name, amount, uuid })
            }
          }

          return item
        })
      }

      // if key is not found, add a new entry to state
      return state.concat({
        title: date,
        data: [{ name, amount, uuid }]
      })

    case 'DELETE_EXPENSE': // date, uuid
      const { itemUUID } = action.payload

      const removedExpenseData = state.map(obj => {
        let newData = obj.data.filter(item => item.uuid !== itemUUID)

        return {
          ...obj,
          data: newData
        }
      })

      // only return data with items
      return removedExpenseData.filter(obj => obj.data.length > 0)

    default:
      return state
  }
}

export default ItemsReducer
