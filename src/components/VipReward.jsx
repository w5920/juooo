import React, { Component } from 'react';

import vipRewardCss from '../assets/css/component/vipReward.module.css'

class VipReward extends Component {
    render() {
        return (
            <ul className={vipRewardCss.rewardContainer}>
                <li>
                    <div className={vipRewardCss.rewardBgimg}></div>
                    <span className={vipRewardCss.rewardName}>优先购票</span>
                </li>
                <li>
                    <div className={vipRewardCss.rewardBgimg}></div>
                    <span className={vipRewardCss.rewardName}>专属票价</span>
                </li>
                <li>
                    <div className={vipRewardCss.rewardBgimg}></div>
                    <span className={vipRewardCss.rewardName}>专享折扣</span>
                </li>
                <li>
                    <div className={vipRewardCss.rewardBgimg}></div>
                    <span className={vipRewardCss.rewardName}>专享券</span>
                </li>
                <li>
                    <div className={vipRewardCss.rewardBgimg}></div>
                    <span className={vipRewardCss.rewardName}>全场包邮</span>
                </li>
                <li>
                    <div className={vipRewardCss.rewardBgimg}></div>
                    <span className={vipRewardCss.rewardName}>双倍积分</span>
                </li>
                <li>
                    <div className={vipRewardCss.rewardBgimg}></div>
                    <span className={vipRewardCss.rewardName}>赠观影券</span>
                </li>
                <li>
                    <div className={vipRewardCss.rewardBgimg}></div>
                    <span className={vipRewardCss.rewardName}>明星活动</span>
                </li>
                <li>
                    <div className={vipRewardCss.rewardBgimg}></div>
                    <span className={vipRewardCss.rewardName}>免费期刊</span>
                </li>
                <li>
                    <div className={vipRewardCss.rewardBgimg}></div>
                    <span className={vipRewardCss.rewardName}>生日专享</span>
                </li>
                <li>
                    <div className={vipRewardCss.rewardBgimg}></div>
                    <span className={vipRewardCss.rewardName}>敬请期待</span>
                </li>
            </ul>
        );
    }
}

export default VipReward;