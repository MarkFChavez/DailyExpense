import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  DatePickerIOS,
  Modal,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView
} from 'react-native'
import { connect } from 'react-redux'
import { hideModal } from '../actions'

class ModalContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      amount: '',
      date: new Date()
    }
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisible}
      >
        <StatusBar barStyle="dark-content" />

        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          {/* back button */}
          <View style={styles.backContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={this._closeModal.bind(this)}
            >
              <Text style={styles.back}> ← </Text>
            </TouchableOpacity>
          </View>

          {/* form container */}
          <View style={{ flexGrow: 2 }}>
            <TextInput
              style={styles.textInput}
              placeholder="e.g. Bought myself a milk"
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
            />

            <TextInput
              style={styles.textInput}
              placeholder="30.00"
              keyboardType="numeric"
              value={this.state.amount}
              onChangeText={amount => this.setState({ amount })}
            />

            <Text style={styles.dateLabel}>When did you spend it?</Text>

            <DatePickerIOS
              style={{ flex: 1 }}
              date={this.state.date}
              mode="date"
              maximumDate={new Date()}
              onDateChange={date => this.setState({ date })}
            />
          </View>

          {/* button container */}
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end'
            }}
          >
            <TouchableOpacity style={styles.addExpenseButton}>
              <Text style={{ fontSize: 18, color: '#fff' }}> Add Expense </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    )
  }

  _closeModal() {
    this.setState({
      name: '',
      amount: '',
      date: new Date()
    })
    this.props.hideModal()
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: 20
  },
  backContainer: {
    height: 50,
    alignSelf: 'flex-start'
  },
  backButton: {
    paddingVertical: 10,
    paddingLeft: 10
  },
  back: {
    fontSize: 24
  },
  dateLabel: {
    fontSize: 18,
    marginHorizontal: 20,
    marginVertical: 10
  },
  addExpenseButton: {
    alignSelf: 'center',
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#000'
  },
  textInput: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginHorizontal: 20,
    marginVertical: 10
  }
}

const mapStateToProps = ({ modalVisible }) => {
  return { modalVisible }
}

export default connect(mapStateToProps, { hideModal })(ModalContainer)
