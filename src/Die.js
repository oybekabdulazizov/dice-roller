import React, { Component } from 'react';
import './Die.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';

class Die extends Component {
    static defaultProps = {
        dice: 
        [
            <FontAwesomeIcon className="Die" icon={faDiceOne} />,
            <FontAwesomeIcon className="Die" icon={faDiceTwo} />,
            <FontAwesomeIcon className="Die" icon={faDiceThree} />,
            <FontAwesomeIcon className="Die" icon={faDiceFour} />,
            <FontAwesomeIcon className="Die" icon={faDiceFive} />,
            <FontAwesomeIcon className="Die" icon={faDiceSix} />
        ]
    }
    
    render() {
        return (
            <div>
                {this.props.dice[5]}
            </div>
        )
    }
}

export default Die;