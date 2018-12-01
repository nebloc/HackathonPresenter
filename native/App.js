import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Countdown from './Countdown';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>R U Hacking!</Text>
        <Countdown endTime={Date.parse("02 Dec 2018 00:00:00")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
