import React from 'react';

export default class Timeline extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [
                {
                    name: "Intro",
                    time: "09 AM"

                },
                {
                    name: "Hacking starts",
                    time: "10 AM"
                },
                {
                    name: "Lunch",
                    time: "12 AM"

                },
            ]
        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <ul style={
                {
                    listStyle: 'none',
                    width: '80%',
                    padding: '0',
                    margin: '0 auto'
                }
            }>
                {
                    this.state.events.map((event, i) => <Event data={event} index={i}></Event>)
                }
            </ul>
        );
    }

}

class Event extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'white'
        }
    }
    // TODO: set this based on current time and
    // event time
    componentDidMount() {
        if (this.props.index === 1) {
            this.setState({ color: 'grey' })
        }
    }
    render() {
        return (
            <li
                key={this.props.index}
                style={{ backgroundColor: this.state.color }}
            >
                {this.props.data.time}: {this.props.data.name}
            </li>
        );
    }
}