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

export { showModal, hideModal }
