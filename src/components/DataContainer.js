import React, { Component } from 'react'
import { View, Text, SectionList } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
import Swipeout from 'react-native-swipeout'
import { numberWithCommas } from '../helpers'

class DataContainer extends Component {
  render() {
    return <View style={styles.listContainer}>{this._renderData()}</View>
  }

  _renderData() {
    const { sections } = this.props

    if (sections.length > 0) {
      const sortedSections = sections.sort((first, second) => {
        first.title < second.title
      })

      return (
        <SectionList
          keyExtractor={this._keyExtractor}
          renderSectionHeader={this._renderSectionHeader}
          renderItem={this._renderSectionItems}
          sections={sortedSections}
        />
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

  _keyExtractor = (item, index) => item.name

  _renderSectionHeader({ section }) {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>{section.title}</Text>
      </View>
    )
  }

  _renderSectionItems({ item }) {
    const swipeoutButtons = [
      {
        text: 'Delete',
        type: 'delete'
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
            <Text style={styles.rowText}>{numberWithCommas(item.amount)}</Text>
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
    justifyContent: 'space-between'
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
  }
}

const mapStateToProps = ({ sections }) => {
  return { sections }
}

export default connect(mapStateToProps)(DataContainer)
