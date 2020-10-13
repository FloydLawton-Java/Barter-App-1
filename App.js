import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Login from './screens/login';

export default class App extends React.Component{
  render(){
    return(
      <View>
        <Login/>
      </View>
    )
  }
}