import React from 'react'
import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView
} from 'react-native'
import { connect } from 'react-redux'

const ModalContainer = props => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.modalVisible}
    >
      <StatusBar barStyle="dark-content" />
      <View style={styles.modalContainer}>
        <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
          <View style={styles.innerContainer}>
            <TextInput
              autoCorrect={false}
              style={styles.textfield}
              placeholder={'Where did that money go?'}
            />
          </View>

          <View style={styles.innerContainer}>
            <TextInput
              autoCorrect={false}
              keyboardType={'numeric'}
              style={styles.textfield}
              placeholder={'How much I spent on it?'}
            />
          </View>

          <View style={styles.innerContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add Expense</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  )
}

const styles = {
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  innerContainer: {
    marginVertical: 20
  },
  textfield: {
    height: 40,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  button: {
    width: 150,
    borderWidth: 1,
    borderColor: '#000',
    alignSelf: 'center',
    paddingVertical: 10
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '300',
    fontFamily: 'Avenir Next'
  }
}
const mapStateToProps = ({ modalVisible }) => {
  return { modalVisible }
}

export default connect(mapStateToProps)(ModalContainer)
