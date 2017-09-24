import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { showModal } from '../actions'

class AmountContainer extends Component {
  render() {
    return (
      <View style={styles.amountContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={this._showModal.bind(this)}
        >
          <Text style={styles.addText}> New </Text>
        </TouchableOpacity>

        {this._renderAmount()}
      </View>
    )
  }

  _renderAmount() {
    if (this.props.total !== null) {
      return <Text style={styles.amountText}> {this.props.total} </Text>
    }

    return <Text style={styles.amountText}>0.00</Text>
  }

  _showModal() {
    // set modalVisible to `true`
    this.props.showModal()
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
    backgroundColor: '#2ecc71',
    width: 100,
    padding: 10
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

export default connect(mapStateToProps, { showModal })(AmountContainer)
