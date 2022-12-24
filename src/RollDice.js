import React, { Component } from 'react';
import dice from './dice';
import Die from './Die';
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        dice
    }

    state = {
        die1: this.props.dice[0],
        die2: this.props.dice[0]
    }

    roll = () => {
        const newDie1 = this.props.dice[Math.floor(Math.random() * this.props.dice.length)]; 
        const newDie2 = this.props.dice[Math.floor(Math.random() * this.props.dice.length)];
        this.setState({ die1: newDie1, die2: newDie2 }); 
    }

    render() {
        return (
            <div>
                <Die face={this.state.die1} />
                <Die face={this.state.die2} />
                <button onClick={this.roll}>Roll Dice!</button>
            </div>
        )
    }
}

export default RollDice;