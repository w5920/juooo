import React, { Component } from 'react';

import axios from 'axios'

import PageHeaderHref from '../../components/common/PageHeaderHref'
import EmptyList from '../../components/common/EmptyList'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            etiketList: []
        }
    }

    async componentDidMount() {
        document.body.style.backgroundColor = '#f5f5f5';
        const data = await axios.get('/user/eticket/getEticketList?type=1&version=6.1.1&referer=2');
        if (data.list) {
            this.setState({
                etiketList: data.list
            })
        }
    }
    render() {
        return (
            <div>
                <PageHeaderHref pageName={'票夹'} rightShow={true}></PageHeaderHref>
                {
                    this.state.etiketList.length === 0 ?
                        <EmptyList emptyMsg={{ img: 'ticket_empty', msg: '暂无电子票' }}></EmptyList> : ''
                }
            </div>
        );
    }
}

export default index; 