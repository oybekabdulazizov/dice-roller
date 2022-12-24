import React, { Component } from 'react';
import dice from './dice';
import Die from './Die';
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        diceLength: dice.length
    }
    state = {
        die1: 0,
        die2: 0
    }

    roll = () => {
        const newDie1 = Math.floor(Math.random() * this.props.diceLength); 
        const newDie2 = Math.floor(Math.random() * this.props.diceLength);
        this.setState({ die1: newDie1, die2: newDie2 }); 
    }

    render() {
        return (
            <div className='RollDice'>
                <div className='RollDice-container'>
                    <Die face={this.state.die1} />
                    <Die face={this.state.die2} />
                </div>
                <button className='RollDice-btn' onClick={this.roll}>Roll Dice!</button>
            </div>
        )
    }
}

export default RollDice;