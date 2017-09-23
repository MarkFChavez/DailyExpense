import React from 'react'
import { View, Text, Modal, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

const ModalContainer = props => {
  return (
    <View style={{ marginTop: 22 }}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.modalVisible}
        onRequestClose={() => {
          alert('Modal has been closed.')
        }}
      >
        <Text>hello</Text>
      </Modal>
    </View>
  )
}

const mapStateToProps = ({ modalVisible }) => {
  return { modalVisible }
}

export default connect(mapStateToProps)(ModalContainer)
