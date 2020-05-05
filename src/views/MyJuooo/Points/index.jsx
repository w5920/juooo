import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import myjuoooAction from '../../../store/actionCreator/myJuooo'
import myPointCss from '../../../assets/css/myjuooo/myPoint.module.css'
import PageHeaderYel from '../../../components/common/PageHeaderYel'
import EmptyList from '../../../components/common/EmptyList'
import Loadding from "../../../components/common/Loadding";
class index extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getUserScore();
        this.props.getSchedularList();
    }
    render() {

        if (!this.props.userScore) {
            return <Loadding></Loadding>
        }
        console.log(!this.props.schedular);
        return (
            <div >
                <div className={myPointCss.point}>
                    <PageHeaderYel pageName={'积分商城'}></PageHeaderYel>
                    <p className={myPointCss.pointNum}>{this.props.userScore.scores} <a href={'/Points/detail'}>明细</a></p>
                    <p className={myPointCss.pointName}>可用积分</p>
                </div>
                {
                    !this.props.schedular ?
                        <EmptyList emptyMsg={{ img: 'schedule_empty', msg: '暂无积分换购' }}></EmptyList>
                        : <div></div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userScore: state.myjuooo.userScore,
        schedularList: state.schedular,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(myjuoooAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(index);