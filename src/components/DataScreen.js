import React, { Component } from 'react'
import { View, Text, SectionList } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
import Swipeout from 'react-native-swipeout'
import { numberWithCommas } from '../helpers'
import { deleteExpense, reduceTotal } from '../actions'

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

class DataScreen extends Component {
  render() {
    return (
      <View style={styles.listContainer}>
        {this._renderData()}
      </View>
    )
  }

  _renderData() {
    const { sections } = this.props

    if (sections.length > 0) {
      const sortedSections = sections.sort((first, second) => {
        first.title < second.title
      })

      return (
        <View style={{ flex: 1 }}>
          <Text style={styles.swipeToDelete}>- SWIPE ITEMS TO DELETE -</Text>
          <SectionList
            keyExtractor={this._keyExtractor}
            renderSectionHeader={this._renderSectionHeader.bind(this)}
            renderItem={this._renderSectionItems.bind(this)}
            sections={sortedSections}
          />
        </View>
      )
    } else {
      return (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataContent}>
            Start tracking your daily expenses.
          </Text>
        </View>
      )
    }
  }

  _formatDate(date) {
    const toDate = new Date(date)
    const month = toDate.getMonth()
    const day = toDate.getDate()
    const year = toDate.getUTCFullYear()

    return `${monthNames[month]} ${day}, ${year}`
  }

  _keyExtractor = (item, index) => item.name

  _renderSectionHeader({ section }) {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>
          {this._formatDate(section.title)}
        </Text>
      </View>
    )
  }

  _renderSectionItems({ item }) {
    const swipeoutButtons = [
      {
        text: 'Delete',
        type: 'delete',
        onPress: () => {
          // delete expense
          // reduceTotal
          // if no items, remove the section as well
          this.props.deleteExpense(item.uuid)
          this.props.reduceTotal(item.amount)
        }
      }
    ]
    return (
      <Swipeout
        autoClose={true}
        close={true}
        style={{
          backgroundColor: 'transparent'
        }}
        right={swipeoutButtons}
      >
        <View style={styles.rowContainer}>
          <View style={{ flex: 3 }}>
            <Text style={styles.rowText}>{item.name}</Text>
          </View>

          <View
            style={{
              flex: 1,
              alignItems: 'flex-end'
            }}
          >
            <Text style={styles.rowText}>
              {numberWithCommas(Number(item.amount).toFixed(2))}
            </Text>
          </View>
        </View>
      </Swipeout>
    )
  }
}

const styles = {
  listContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  rowText: {
    fontFamily: 'Avenir Next',
    fontSize: 17
  },
  sectionContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginVertical: 10
  },
  sectionHeader: {
    fontWeight: '600',
    fontSize: 17,
    fontFamily: 'Avenir Next'
  },
  noDataContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  noDataContent: {
    fontSize: 24,
    fontWeight: '300',
    fontFamily: 'Avenir Next',
    opacity: 0.5,
    textAlign: 'center'
  },
  swipeToDelete: {
    alignSelf: 'center',
    fontWeight: '400',
    fontFamily: 'Avenir Next',
    fontSize: 14,
    opacity: 0.7
  }
}

const mapStateToProps = ({ sections }) => {
  // sort sections (recent first)
  const orderedSections = sections.sort((a, b) => {
    return new Date(b.title) - new Date(a.title)
  })

  console.log('ORDERED SECTIONS ...')
  console.log(orderedSections)

  return { sections: orderedSections }
}

export default connect(mapStateToProps, { deleteExpense, reduceTotal })(
  DataScreen
)
