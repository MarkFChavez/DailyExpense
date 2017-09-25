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
import { hideModal, addExpense, addTotal } from '../actions'

class ModalContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      amount: '',
      date: new Date(),
      isValid: false
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
              <Text style={styles.back}> ← BACK </Text>
            </TouchableOpacity>
          </View>

          {/* form container */}
          <View style={{ flexGrow: 2 }}>
            <TextInput
              style={styles.textInput}
              placeholder="e.g. Parking fee"
              value={this.state.name}
              autoCorrect={false}
              onChangeText={name => this.setState({ name })}
            />

            <TextInput
              style={styles.textInput}
              placeholder="250.00"
              keyboardType="numeric"
              value={this.state.amount}
              autoCorrect={false}
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
            <TouchableOpacity
              style={styles.addExpenseButton}
              onPress={this._addExpense.bind(this)}
            >
              <Text style={{ fontSize: 18, color: '#fff' }}> Add Expense </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    )
  }

  _addExpense() {
    const { name, amount, date } = this.state

    // should only happen if validation succeeds
    if (name !== '' && amount !== '') {
      // ACTUALLY ADDING THE EXPENSE
      this.props.addExpense({ name, amount, date })
      this.props.addTotal(amount)
      this.props.hideModal()
      this._resetState()
    } else {
      console.log('Failed validation')
    }
  }

  _resetState() {
    this.setState({
      name: '',
      amount: '',
      date: new Date()
    })
  }

  _closeModal() {
    this._resetState()
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
  logoContainer: {
    height: 50,
    alignSelf: 'center'
  },
  backButton: {
    paddingVertical: 10,
    paddingLeft: 10
  },
  back: {
    fontSize: 18,
    fontWeight: '500'
  },
  dateLabel: {
    marginHorizontal: 20,
    marginVertical: 10,
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 1
  },
  addExpenseButton: {
    alignSelf: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#2ecc71'
  },
  textInput: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginHorizontal: 20,
    marginVertical: 10,
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 1
  }
}

const mapStateToProps = ({ modalVisible }) => {
  return { modalVisible }
}

export default connect(mapStateToProps, { hideModal, addExpense, addTotal })(
  ModalContainer
)
