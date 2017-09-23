import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Modal
} from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './src/reducers'
import AmountContainer from './src/components/AmountContainer'
import ModalContainer from './src/components/ModalContainer'
import List from './src/components/List'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <StatusBar barStyle={'light-content'} />

          <AmountContainer />

          <View style={styles.dataContainer}>
            <List />
          </View>

          <ModalContainer />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  dataContainer: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
