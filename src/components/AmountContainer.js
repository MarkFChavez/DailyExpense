import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { showModal } from '../actions'
import { numberWithCommas } from '../helpers'

class AmountContainer extends Component {
  render() {
    return (
      <View style={styles.amountContainer}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            color: '#fff',
            fontWeight: '500'
          }}
        >
          D△ILYSPEND
        </Text>
        {this._renderAmount()}
        <TouchableOpacity onPress={this._showModal.bind(this)}>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                fontWeight: '200',
                color: '#ecf0f1',
                letterSpacing: 1
              }}
            >
              click here to add(+)
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  _renderAmount() {
    if (this.props.total !== null) {
      return (
        <Text style={styles.amountText}>
          {numberWithCommas(this.props.total.toFixed(2))}
        </Text>
      )
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
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#3498db',
    alignSelf: 'stretch'
  },
  addButton: {
    position: 'absolute',
    right: 0,
    top: 20,
    padding: 10
  },
  addText: {
    fontSize: 48,
    fontWeight: '200',
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
