import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import myPointAction from '../../../store/actionCreator/myJuooo/myPoint'
import myPointCss from '../../../assets/css/myjuooo/myPoint.module.css'
import PageHeader from '../../../components/common/PageHeader'
import EmptyList from '../../../components/common/EmptyList'
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
            return <p>加载中。。。</p>
        }
        return (
            <div >
                <div className={myPointCss.point}>
                    <PageHeader pageName={'积分商城'}></PageHeader>
                    <p className={myPointCss.pointNum}>{this.props.userScore.scores} <a href={'/Points/detail'}>明细</a></p>
                    <p className={myPointCss.pointName}>可用积分</p>
                </div>
                {
                    !this.props.schedularList ?
                        <EmptyList emptyMsg={{ img: 'schedule_empty', msg: '暂无积分换购' }}></EmptyList>
                        : <div></div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        userScore: state.userScore.userScore,
        schedularList: state.schedular,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(myPointAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(index);