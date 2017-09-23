import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { toggleModal } from '../actions'

class AmountContainer extends Component {
  render() {
    return (
      <View style={styles.amountContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={this._showModal.bind(this)}
        >
          <Text style={styles.addText}> Add </Text>
        </TouchableOpacity>
        <Text style={styles.amountText}> P{this.props.total} </Text>
      </View>
    )
  }

  _showModal() {
    // set modalVisible to `true`
    this.props.toggleModal()
  }
}

const styles = {
  amountContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
    alignSelf: 'stretch'
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    borderWidth: 1,
    borderColor: '#fff',
    width: 100,
    padding: 5
  },
  addText: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Avenir Next',
    color: '#fff',
    textAlign: 'center'
  },
  amountText: {
    fontSize: 72,
    fontWeight: '200',
    fontFamily: 'Avenir Next',
    color: '#fff'
  }
}

const mapStateToProps = ({ total }) => {
  return { total }
}

export default connect(mapStateToProps, { toggleModal })(AmountContainer)
