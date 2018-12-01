import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Message extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentMessage: "Welcome!"
        }
    }

    componentDidMount() {
        // Ticker takes 5 seconds
        setInterval(() => { this.setState({ currentMessage: "You better be hacking!" }) }, 5000)
        // Listen to Serverless system here
    }

    render() {
        return (
            <View style={styles.message}>
                <View style={styles.lineStyle} />
                <Text style={styles.text}> {this.state.currentMessage} </Text>
                <View style={styles.lineStyle} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    message: {
        width: '100%',
        alignItems: 'center',
    },
    lineStyle: {
        width: '100%',
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 10,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
    }
});