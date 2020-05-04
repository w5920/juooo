import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
class ButtonFoot extends Component {
    render() {
        console.log(this.props);
        return (
            <>
                <button
                    onClick={() => this.props.buttonFootFn()}
                    style={{
                        width: '345px',
                        height: '47px',
                        backgroundColor: '#FF6743',
                        position: 'fixed',
                        bottom: '15px',
                        left: '15px',
                        borderRadius: '23px',
                        border: '0',
                        fontSize: '16px',
                        lineHeight: '47px',
                        color: '#fff'
                    }}>{this.props.buttonValue}</button>
            </>
        );
    }
}

export default withRouter(ButtonFoot);