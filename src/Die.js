import React, { Component } from 'react';

class Die extends Component {    
    render() {
        return (
            <div>
                {this.props.face}
            </div>
        )
    }
}

export default Die;