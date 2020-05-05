import React, { Component } from 'react';
import PageHeaderYel from '../components/common/PageHeaderYel'
class Error extends Component {
    render() {
        return (
            <div>
                <PageHeaderYel pageName={'404'}></PageHeaderYel>
                <img src={require('../assets/img/not_found.jpg')}
                    style={{
                        width: '250pxpx',
                        height: '187px',
                        margin: 'auto',
                        marginTop: '200px'
                    }} />
            </div>
        );
    }
}

export default Error;