import React, { Component } from 'react';

import cityCheckCss from '../../assets/css/component/cityCheck.module.css'
import addressJson from '../../assets/address.json'
const data = addressJson.list;



/**
 * 滚动组件
 */
class WheelView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isTouchStart: false
    }
  }

  /**
   * 当有新的属性需要更新时。也就是网络数据回来之后
   * @param nextProps
   */
  componentWillReceiveProps(nextProps) {//接收父组建的数据
    this.setState({
      data: this.props.data,
    });//把新的数据填进列表，setState会自动触发render更新界面
    this.scroller.scrollTop = 40 * this.props.index;
    //每个列表选项高度为40px;
  }
  touchStart(event) {
    this.state.isTouchStart = true;
  }

  touchEnd(event) {
    this.state.isTouchStart = false;
    this.timer = setTimeout(this.reSet, 100)
    //100毫秒未触摸，认定滚动结束进行状态修正
  }
  componentDidMount() {
    console.log(this);
    this.scroller.addEventListener('touchstart', this.touchStart.bind(this), false);
    this.scroller.addEventListener('touchend', this.touchEnd.bind(this), false);
    this.scroller.addEventListener('mousedown', this.touchStart.bind(this), false);
    this.scroller.addEventListener('mouseup', this.touchEnd.bind(this), false);
  }

  /**
 * 状态修正
 */
  reSet() {
    if (this.isTouchStart) return;//如果在触摸状态，返回
    console.log('scrolling ends..')
    console.log(this.scroller);
    var top = this.scroller.scrollTop;//滚过的高度
    var dis = top % 40;
    var target;
    if (dis > 20) {//超过一半，向下滚
      target = top + (40 - dis);
      this.transfrom(target);
    } else {//否则滚回去
      target = top - dis;
      this.transfrom(target);
    }
    this.index = target / 40;//  当前选中的序号
    this.props.onDataChange(this.props.type, this.index);
  }
  /**
   * 监听滚动事件
   * @param e
   */
  onScroll() {
    const _this = this;
    this.timer = setTimeout(this.reSet.bind(_this), 100);
    if (this.timer) clearTimeout(this.timer)//如果一直在滚动，不会触发timer
    // this.timer = setTimeout(this.reSet.bind(_this), 100)
    //100毫秒未滚动，认定滚动结束
  }


  handleClick(e) {   //点到哪个滚到目标位置
    console.log(e.clientY - 120);
    var distance = e.clientY - 120;  //当前点击的位置距目标位置的距离
    var top = this.scroller.scrollTop;  //滚过的高度
    var target = top + Math.floor(distance / 40) * 40;  //需要滚动的高度
    this.transfrom.bind(this, target);    //动画过渡到目标位置
    this.index = target / 40;  //  当前选中的序号
    this.props.onDataChange(this.props.type, this.index);
    //回调函数数据改变事件  
  }
  /**
   * 动画过渡到目标位置
   * @param target
   */
  async transfrom(target) {
    var now = this.scroller.scrollTop;
    var step = (target - now) / 20;
    setTimeout(function () {
      this.scroller.scrollTop = this.scroller.scrollTop + step;
      if (this.scroller.scrollTop != target)
        setTimeout(this, 10);//没有滚动到目标位置，继续触发自己
    }, 10);
  }

  render() {
    return (<div className={cityCheckCss.container}
      name='container'
      onScroll={this.onScroll.bind(this)}
      onClick={this.handleClick.bind(this)}>
      <div className={cityCheckCss.scroller} ref={(scroller) => { this.scroller = scroller }}>
        {
          this.props.data.map(function (item) {
            //循环把数据显示出来
            return <div className={cityCheckCss.item} key={item.city_id}>{item.name}</div>
          })
        }
      </div>
    </div>
    );
  }
}

/**
 * 选择组件
 */
class WheelDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      pro: data,
      pro: data,//省数组
      city: [],//市数组
      area: [],//区数组
      pIndex: 0,//当前的省下标
      cIndex: 0,//当前的市下标
      aIndex: 0,//当前的区下标
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.data });//把新的数据填进列表，setState会自动触发render更新界面
    this.initData(nextProps.data);
  }
  initData(data) {
    var pArr = [];
    var cArr = [];
    var aArr = [];
    data.map(function (pro) {
      pArr.push(pro.name);
    });
    if (data[0])
      data[0].city.map(function (city) {
        cArr.push(city.name)
      });
    aArr = data[0].city[0].area;
    this.setState({
      pro: pArr,
      city: cArr,
      area: aArr
    });
    this.props.onAddressSelect(0, 0, 0);
  }
  onDataChange(type, index) {
    console.log(type + "   --->" + index)
    var cArr = [];
    var aArr = [];
    switch (type) {
      case "pro"://省带动市区变化
        this.state.data[index].list.map(function (city) {
          cArr.push(city)
        });
        aArr = this.state.data[index].list[0].area;
        this.setState({
          city: cArr,
          area: aArr,
          pIndex: index,
          cIndex: 0,
          aIndex: 0,
        });
        break;
      case "city"://市带动区变化
        aArr = this.state.data[this.state.pIndex].list[index].area;
        this.setState({
          area: aArr,
          cIndex: index,
          aIndex: 0,
        });

        break;
      case "area":
        this.setState({ aIndex: index });
        break;
    }
    this.props.onAddressSelect(this.state.pIndex, this.state.cIndex, this.state.aIndex);//数据变化之后，触发回调
  }
  render() {
    return (
      <div className={cityCheckCss.dialog}>
        <div className={cityCheckCss.box}></div>
        <WheelView type="pro" data={this.state.pro}
          index={this.state.pIndex}
          onDataChange={this.onDataChange.bind(this)} />
        <WheelView type="city" data={this.state.city}
          index={this.state.cIndex}
          onDataChange={this.onDataChange.bind(this)} />
        <WheelView type="area" data={this.state.area}
          index={this.state.aIndex}
          onDataChange={this.onDataChange.bind(this)} />

      </div>
    );
  }
};




class ProductCityList extends Component {

  render() {
    return (
      <div>
        <WheelDialog></WheelDialog>
      </div>
    );
  }
}

export default ProductCityList;




