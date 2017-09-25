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

const deleteExpense = itemUUID => {
  // uuid to delete
  return {
    type: 'DELETE_EXPENSE',
    payload: {
      itemUUID
    }
  }
}

const addTotal = amount => {
  return {
    type: 'ADD_TOTAL',
    payload: amount
  }
}

const reduceTotal = amount => {
  return {
    type: 'REDUCE_TOTAL',
    payload: amount
  }
}

export {
  showModal,
  hideModal,
  addExpense,
  deleteExpense,
  addTotal,
  reduceTotal
}
