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
        die2: 0, 
        rolling: false
    }

    roll = () => {
        const newDie1 = Math.floor(Math.random() * this.props.diceLength); 
        const newDie2 = Math.floor(Math.random() * this.props.diceLength);
        this.setState({ die1: newDie1, die2: newDie2, rolling: true }); 

        setTimeout(() => {
            this.setState({ rolling: false });
        }, 1000)
    }

    render() {
        return (
            <div className='RollDice'>
                <div className='RollDice-container'>
                    <Die face={this.state.die1} />
                    <Die face={this.state.die2} />
                </div>
                <button className='RollDice-btn' onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? "Rolling..." : "Roll Dice!"}
                </button>
            </div>
        )
    }
}

export default RollDice;