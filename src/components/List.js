import React, { Component } from 'react'
import { View, Text, SectionList } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'

class List extends Component {
  render() {
    return <View style={styles.listContainer}>{this._renderData()}</View>
  }

  _renderData() {
    const { sections } = this.props

    if (sections.length > 0) {
      return (
        <SectionList
          keyExtractor={this._keyExtractor}
          renderSectionHeader={this._renderSectionHeader}
          renderItem={this._renderSectionItems}
          sections={sections}
        />
      )
    } else {
      return (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataContent}> some image here </Text>
        </View>
      )
    }
  }

  _keyExtractor = (item, index) => item.id

  _renderSectionHeader({ section }) {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>{section.title}</Text>
      </View>
    )
  }

  _renderSectionItems({ item }) {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.rowNameText}>{item.name}</Text>
        <Text style={styles.rowAmountText}>{item.amount}</Text>
      </View>
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
  rowNameText: {
    fontFamily: 'Avenir Next',
    fontSize: 14
  },
  sectionContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 5
  },
  sectionHeader: {
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Avenir Next'
  },
  noDataContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  noDataContent: {
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Avenir Next',
    opacity: 0.5
  }
}

const mapStateToProps = ({ sections }) => {
  return { sections }
}

export default connect(mapStateToProps)(List)
