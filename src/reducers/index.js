import { combineReducers } from 'redux'
import ItemsReducer from './ItemsReducer'
import TotalAmountReducer from './TotalAmountReducer'
import ModalVisibilityReducer from './ModalVisibilityReducer'

export default combineReducers({
  total: TotalAmountReducer,
  sections: ItemsReducer,
  modalVisible: ModalVisibilityReducer
})
