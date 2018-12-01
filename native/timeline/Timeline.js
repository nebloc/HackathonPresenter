import React from 'react';
import { ListView, Text, StyleSheet } from 'react-native';

export default class Timeline extends React.Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            // TODO: Remove place holder data
            // Need to understand the data structure coming
            // from google sheets
            events: ds.cloneWithRows([
                {
                    name: "Intro",
                    time: "09:00"

                },
                {
                    name: "Hacking starts",
                    time: "10:00"
                },
                {
                    name: "Lunch",
                    time: "12:00"
                },
                {
                    name: "Presentation",
                    time: "17:00"
                },
            ])
        }
    }

    componentDidMount() {
        // TODO: listen to serverless function for the
        // data from GS
    }

    formatDate(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes;
        return strTime;
    }

    render() {
        return (
            <ListView
                style={styles.events}
                dataSource={this.state.events}
                renderRow={(event) => {
                    return <Text style={styles.event}>{event.time} | {event.name}</Text>
                }} />
        );
    }
}

const styles = StyleSheet.create({
    events: {
        paddingTop: 10,
    },
    event: {
        paddingTop: 10,
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    }
});