import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import myjuoooAction from '../../../store/actionCreator/myJuooo'
import mybanlanceCss from '../../../assets/css/myjuooo/myBanlance.module.css'

import PageHeaderYel from '../../../components/common/PageHeaderYel'
import EmptyList from '../../../components/common/EmptyList'
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            banlanceType: 1
        }
    }

    componentDidMount() {
        this.props.getBanlanceList();
    }
    handleType(num) {
        this.setState({
            banlanceType: num
        });
        this.props.getBanlanceList(num);
    }
    render() {
        console.log(this.props.banlanceList);
        if (!this.props.banlanceList) {
            return <p>加载中。。。</p>
        }
        return (
            <div>
                <PageHeaderYel pageName={'账户余额'}></PageHeaderYel>
                <div className={mybanlanceCss.banlance}>
                    <p className={mybanlanceCss.banlanceName}>0.00</p>
                    <p className={mybanlanceCss.banlanceNum}>账户余额(元)</p>
                </div>
                <div><img className={mybanlanceCss.banlanceBgImg} src={require('../../../assets/img/balance_bg.png')} alt="" /></div>
                <ul className={mybanlanceCss.banlanceType}>
                    <li className={this.state.banlanceType == 1 ? mybanlanceCss.activeType : ""} onClick={this.handleType.bind(this, 1)}>余额收入</li>
                    <li className={this.state.banlanceType == 2 ? mybanlanceCss.activeType : ""} onClick={this.handleType.bind(this, 2)}>余额支出</li>
                </ul>

                {
                    this.props.banlanceList.length === 0 ?
                        <EmptyList emptyMsg={{ img: 'balance_empty', msg: '暂无交易记录' }}></EmptyList>
                        : <div></div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        banlanceList: state.myjuooo.banlanceList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(myjuoooAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(index);