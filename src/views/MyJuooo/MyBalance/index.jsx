import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import myBanlanceAction from '../../../store/actionCreator/myJuooo/myBanlance'
import mybanlanceCss from '../../../assets/css/myjuooo/myBanlance.module.css'

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
        console.log(this.props);
        return (
            <div>
                <div className={mybanlanceCss.banlance}>
                    <p className={mybanlanceCss.banlanceName}>0.00</p>
                    <p className={mybanlanceCss.banlanceNum}>账户余额(元)</p>
                </div>
                <div><img className={mybanlanceCss.banlanceBgImg} src={require('../../../assets/img/balance_bg.png')} alt="" /></div>
                <ul className={mybanlanceCss.banlanceType}>
                    <li className={this.state.banlanceType == 1 ? mybanlanceCss.activeType : ""} onClick={this.handleType.bind(this, 1)}>余额收入</li>
                    <li className={this.state.banlanceType == 2 ? mybanlanceCss.activeType : ""} onClick={this.handleType.bind(this, 2)}>余额支出</li>
                </ul>
                <div className={mybanlanceCss.banlanceList}>
                    <div className={this.props.banlanceList ? mybanlanceCss.empty : mybanlanceCss.noEmpty}>
                        <img src={require('../../../assets/img/balance_empty.png')} alt="" />
                        <p>暂无交易记录</p>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        banlanceList: state.banlance.banlanceList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(myBanlanceAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(index);