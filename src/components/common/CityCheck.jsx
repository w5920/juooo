import React, { Component } from 'react';
import { Picker, List, WhiteSpace } from 'antd-mobile';
import cityCheckCss from '../../assets/css/component/cityCheck.module.css'

import arrayTreeFilter from 'array-tree-filter';
import cityJson from '../../assets/address.json'
const allAddressList = cityJson.children;

class CityCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      cols: 1,
      pickerValue: [],
      asyncValue: [],
      visible: false,
      colorValue: ['#00FF00'],
    };
  }
  getSel() {
    const value = this.state.pickerValue;
    if (!value) {
      return '';
    }
    const treeChildren = arrayTreeFilter(allAddressList, (c, level) => c.value === value[level]);
    console.log(treeChildren.map(v => v.value).join(','));
    return treeChildren.map(v => v.value).join(',');
  }

  onChangeColor = (color) => {
    this.setState({
      colorValue: color,
    });
  };
  render() {
    return (
      <div className={cityCheckCss.compoentContainer}>
        <Picker
          visible={this.state.visible}
          data={allAddressList}
          value={this.state.pickerValue}
          onChange={v => this.setState({ pickerValue: v })}
          onOk={() => this.setState({ visible: false })}
          onDismiss={() => this.setState({ visible: false })}
        >
          <List.Item extra={this.getSel()} onClick={() => this.setState({ visible: true })}>
            <p className={cityCheckCss.cityListBtn}>所在地区：</p>
          </List.Item>
        </Picker>
      </div>
    );
  }
}

export default CityCheck;




