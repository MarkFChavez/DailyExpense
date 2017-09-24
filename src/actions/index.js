const showModal = () => {
  return {
    type: 'SHOW_MODAL'
  }
}

const hideModal = () => {
  return {
    type: 'HIDE_MODAL'
  }
}

const addExpense = ({ name, amount, date }) => {
  return {
    type: 'ADD_EXPENSE',
    payload: {
      name,
      amount,
      date
    }
  }
}

const addTotal = amount => {
  return {
    type: 'ADD_TOTAL',
    payload: amount
  }
}

export { showModal, hideModal, addExpense, addTotal }
