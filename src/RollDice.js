import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        diceIdx: 
        [
            0, 
            1, 
            2, 
            3, 
            4, 
            5
        ]
    }
    state = {
        die1: 0,
        die2: 0, 
        rolling: false
    }

    roll = () => {
        const newDie1 = Math.floor(Math.random() * this.props.diceIdx.length); 
        const newDie2 = Math.floor(Math.random() * this.props.diceIdx.length);
        this.setState({ die1: newDie1, die2: newDie2, rolling: true });

        setTimeout(() => {
            this.setState({ rolling: false });
        }, 1000)
    }

    render() {
        return (
            <div className='RollDice'>
                <div className='RollDice-container'>
                    <Die face={this.state.die1} rolling={this.state.rolling} />
                    <Die face={this.state.die2} rolling={this.state.rolling} />
                </div>
                <button className='RollDice-btn' onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? "Rolling..." : "Roll Dice!"}
                </button>
            </div>
        )
    }
}

export default RollDice;