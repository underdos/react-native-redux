import React, { Component } from 'react'
import connect from 'react-redux'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native'

// import { login } from '../actions'

class Home extends Component {
  componentWillMount() {
    console.log(this.props)
  }

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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = (state) => {
  return { user: state.auth.user }
}

export default connect(mapStateToProps)(Home)