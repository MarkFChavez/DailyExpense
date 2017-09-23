import data from '../../data.json'

const ItemsReducer = (state = {}, action) => {
  return data.sections
}

export default ItemsReducer
