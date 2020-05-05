import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import pageHeaderWhiteCss from '../../assets/css/component/pageHeaderWhite.module.css'

import { Popover, NavBar, Icon } from 'antd-mobile';
const Item = Popover.Item;
const myImg = src => <img src={require(`../../assets/img/${src}.png`)} className={pageHeaderWhiteCss.itemImg} />;

class PageHeaderHref extends Component {
    state = {
        visible: false,
        selected: '',
    };
    onSelect = (opt) => {
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
        if (opt.props.value === 'home') {
            this.props.history.push('/')
        }
        if (opt.props.value === 'myjuooo') {
            this.props.history.push('/Myjuooo')
        }
    };
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };
    render() {
        return (
            <div className={pageHeaderWhiteCss.pageHeader}>
                <NavBar
                    className={pageHeaderWhiteCss.am}
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.go(-1)}
                    rightContent={
                        <Popover mask
                            className={pageHeaderWhiteCss.navContainer}
                            overlayStyle={{ color: 'currentColor' }}
                            visible={this.state.visible}
                            overlay={[
                                (<Item key="4" value="home" className={pageHeaderWhiteCss.popoverItem} icon={myImg('home')} data-seed="logId">首页</Item>),
                                (<Item key="5" value="myjuooo" className={pageHeaderWhiteCss.popoverItem} icon={myImg('my')} style={{ whiteSpace: 'nowrap' }}>我的聚橙</Item>),
                            ]}
                            align={{
                                overflow: { adjustY: 0, adjustX: 0 },
                                offset: [-10, 0],
                            }}
                            onVisibleChange={this.handleVisibleChange}
                            onSelect={this.onSelect}
                        >
                            <div style={{
                                height: '100%',
                                padding: '0 10px',
                                float: 'right',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            >
                                <Icon type="ellipsis" />
                            </div>
                        </Popover>
                    }
                >
                    {this.props.pageName}
                </NavBar>
            </div>);
    }
}

export default withRouter(PageHeaderHref);
