import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Modal,
  AsyncStorage
} from 'react-native'
import { compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import reducers from './src/reducers'
import AmountContainer from './src/components/AmountContainer'
import ModalContainer from './src/components/ModalContainer'
import DataContainer from './src/components/DataContainer'

let store = createStore(reducers, {}, compose(autoRehydrate()))
persistStore(store, { storage: AsyncStorage })

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar barStyle={'light-content'} />

          <AmountContainer />
          <DataContainer />
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
  }
})
