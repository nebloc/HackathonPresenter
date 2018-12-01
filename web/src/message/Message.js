import React from 'react';
import './Message.css'

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
            <div className="ticker">
                <hr />
                <span> {this.state.currentMessage} </span>
                <hr />
            </div>
        );
    }
}