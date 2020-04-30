import React, { Component } from 'react';
import emptyListCss from '../../assets/css/component/emptyList.module.css'

class EmptyList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { img, msg } = this.props.emptyMsg;
        return (
            <div className={emptyListCss.contList}>
                <div className={emptyListCss.emptyCont}>
                    <img src={require('../../assets/img/' + img + '.png')} alt="" />
                    <p>{msg}</p>
                </div>
            </div>
        );
    }
}

export default EmptyList;
