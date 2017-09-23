import { combineReducers } from 'redux'
import ItemsReducer from './ItemsReducer'
import TotalAmountReducer from './TotalAmountReducer'
import ModalReducer from './ModalReducer'

export default combineReducers({
  total: TotalAmountReducer,
  sections: ItemsReducer,
  modalVisible: ModalReducer
})
