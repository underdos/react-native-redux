import React, { Component } from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native with Redux!
      </Text>
      <Text style={styles.instructions}>
        Simple fetch data from server with Redux Thunk
      </Text>
      <Button 
        onPress={() => console.log('fetching data from server')} 
        title={'FETCH DATA'} 
      />
    </View>
    )
  }
}

export default Home