import React, { Component } from 'react';
import myPointCss from '../../../assets/css/myjuooo/myPoint.module.css'

class index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={myPointCss.point}>
                <p className={myPointCss.pointNum}>num <a href={'/Points/detail'}>明细</a></p>
                <p className={myPointCss.pointName}>可用积分</p>
            </div>
        );
    }
}

export default index;