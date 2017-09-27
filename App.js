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
import AmountScreen from './src/components/AmountScreen'
import ModalScreen from './src/components/ModalScreen'
import DataScreen from './src/components/DataScreen'

let store = createStore(reducers, {}, compose(autoRehydrate()))
persistStore(store, { storage: AsyncStorage })

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar barStyle={'light-content'} />

          <AmountScreen />
          <DataScreen />
          <ModalScreen />
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
