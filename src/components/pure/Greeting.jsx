import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {

    constructor(props){
        super(props)
        this.state = {
            age: 23
        }
    }

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1,
            }
        ))
    }

    render() {
        return (
            <div>
                <h1>
                My name is { this.props.name }
                </h1>
                <h2>
                My age is { this.state.age } years old
                </h2>
                <div>
                    <button
                        onClick={this.birthday}
                    >Add years old</button>
                </div>
            </div>
        );
    }
}

Greeting.propTypes = {
    name: PropTypes.string,
};

export default Greeting;