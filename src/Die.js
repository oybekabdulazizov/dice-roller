import React, { Component } from 'react';
import dice from './dice';
import './Die.css';

class Die extends Component {
    static defaultProps = {
        dice
    }    

    render() {
        return (
            <div>
                {this.props.dice[this.props.face]}
            </div>
        )
    }
}

export default Die;