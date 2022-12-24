import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import './Die.css';

class Die extends Component { 
    render() {
        const dice =
        [
            <FontAwesomeIcon className={`Die ${this.props.rolling && "shaking"}`} icon={faDiceOne} />,
            <FontAwesomeIcon className={`Die ${this.props.rolling && "shaking"}`} icon={faDiceTwo} />,
            <FontAwesomeIcon className={`Die ${this.props.rolling && "shaking"}`} icon={faDiceThree} />,
            <FontAwesomeIcon className={`Die ${this.props.rolling && "shaking"}`} icon={faDiceFour} />,
            <FontAwesomeIcon className={`Die ${this.props.rolling && "shaking"}`} icon={faDiceFive} />,
            <FontAwesomeIcon className={`Die ${this.props.rolling && "shaking"}`} icon={faDiceSix} />
        ];
        return (
            <div>
                {dice[this.props.face]}
            </div>
        )
    }
}

export default Die;