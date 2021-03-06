import React, { Component } from 'react';
import {
    NavLink
} from "react-router-dom";

import MyRouter from '../../components/common/MyRouter'

class index extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <nav>
                    <NavLink to={'/'}>首页</NavLink>
                    <NavLink to={'/TheatreList'}>剧院</NavLink>
                    <NavLink to={'/Eticket'}>票夹</NavLink>
                    <NavLink to={'/Myjuooo'}>我的</NavLink>
                </nav>
                <MyRouter router={this.props.children}></MyRouter>
            </div>
        );
    }
}

export default index;