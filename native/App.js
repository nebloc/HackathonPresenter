import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Countdown from './countdown/Countdown';
import Message from './message/Message';
import Timeline from './timeline/Timeline';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Header}>R U Hacking!</Text>
        <Countdown endTime={Date.parse("02 Dec 2018 00:00:00")}/>
        <Message />
        <Timeline />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Header: {
    fontWeight: 'bold',
    fontSize: 50,
  }, 
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
